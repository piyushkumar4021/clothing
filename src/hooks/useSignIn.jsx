import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignIn = (signInFormRef) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigate('/');
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = signInFormRef.current;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (error) {
      console.error(error.message);
      alert('Invalid Account');
    }
  };

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider);
  };

  return { handleSignIn, handleSignInWithGoogle };
};

export default useSignIn;
