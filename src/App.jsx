import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Header from './components/Header';
import Login from './page/Login';
import Signup from './page/Signup';
import { auth, createUserInDb } from './utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/user/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      const nextUser = await createUserInDb(userAuth);

      dispatch(setUser(nextUser));
    });

    return () => unsubscribe();
  }, [dispatch]);

  fetch(
    'https://console.firebase.google.com/u/0/project/clothing-33a62/storage/clothing-33a62.appspot.com/files'
  ).then((resp) => console.log(resp));

  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index Component={Home} />
          <Route path='shop' Component={Shop} />
          <Route path='login' Component={Login} />
          <Route path='signup' Component={Signup} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
