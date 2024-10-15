import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

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
