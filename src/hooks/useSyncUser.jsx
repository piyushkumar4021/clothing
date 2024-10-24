import { auth, createUserInDb } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/user/userSlice';

const useSyncUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      const nextUser = await createUserInDb(userAuth);

      dispatch(setUser(nextUser));
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useSyncUser;
