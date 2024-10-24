import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { auth, createUserInDb } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useSignUp = (signUpFormRef) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigate('/');
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { name, email, password, confirmPassword } = signUpFormRef.current;

      if (password.value !== confirmPassword.value) {
        console.log('password not same');
        return;
      }

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      createUserInDb(user, { displayName: name.value });
    },
    [signUpFormRef]
  );

  return { handleSubmit };
};

export default useSignUp;
