import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCEs62JBffocHxOEb5mi1YDOYSkeN7h6sI',
  authDomain: 'clothing-33a62.firebaseapp.com',
  projectId: 'clothing-33a62',
  storageBucket: 'clothing-33a62.appspot.com',
  messagingSenderId: '484449104963',
  appId: '1:484449104963:web:754fccf8458a43709010f6',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

export const createUserInDb = async (userAuth) => {
  if (!userAuth) return null;

  const { uid, displayName, email } = userAuth;
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    try {
      const data = {
        displayName,
        email,
        createdAt: new Date(),
      };

      setDoc(docRef, data);
    } catch (error) {
      console.log('Error : ' + error.message);
    }
  }

  return { uid, displayName, email };
};
