import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  increment,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './config';
import type { ActivityReport } from '../types';

// コレクション名
const ACTIVITIES_COLLECTION = 'activities';

/**
 * 活動報告を投稿
 */
export const createActivity = async (
  title: string,
  description: string,
  images: File[]
): Promise<string> => {
  try {
    // 画像をアップロード
    const imageUrls: string[] = [];
    
    for (const image of images) {
      const timestamp = Date.now();
      const fileName = `activities/${timestamp}_${image.name}`;
      const storageRef = ref(storage, fileName);
      
      // 画像をアップロード
      await uploadBytes(storageRef, image);
      
      // ダウンロードURLを取得
      const downloadURL = await getDownloadURL(storageRef);
      imageUrls.push(downloadURL);
    }

    // Firestoreに保存
    const docRef = await addDoc(collection(db, ACTIVITIES_COLLECTION), {
      title,
      description,
      images: imageUrls,
      date: Timestamp.now(),
      likes: 0,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return docRef.id;
  } catch (error) {
    console.error('Error creating activity:', error);
    throw error;
  }
};

/**
 * 活動報告一覧を取得
 */
export const getActivities = async (): Promise<ActivityReport[]> => {
  try {
    const q = query(
      collection(db, ACTIVITIES_COLLECTION),
      orderBy('date', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    
    const activities: ActivityReport[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      activities.push({
        id: doc.id,
        title: data.title,
        description: data.description,
        images: data.images || [],
        date: data.date.toDate().toISOString().split('T')[0], // YYYY-MM-DD形式
        likes: data.likes || 0,
      });
    });

    return activities;
  } catch (error) {
    console.error('Error getting activities:', error);
    throw error;
  }
};

/**
 * いいねを追加
 */
export const likeActivity = async (activityId: string): Promise<void> => {
  try {
    const activityRef = doc(db, ACTIVITIES_COLLECTION, activityId);
    await updateDoc(activityRef, {
      likes: increment(1)
    });
  } catch (error) {
    console.error('Error liking activity:', error);
    throw error;
  }
};

/**
 * いいねを解除
 */
export const unlikeActivity = async (activityId: string): Promise<void> => {
  try {
    const activityRef = doc(db, ACTIVITIES_COLLECTION, activityId);
    await updateDoc(activityRef, {
      likes: increment(-1)
    });
  } catch (error) {
    console.error('Error unliking activity:', error);
    throw error;
  }
};
