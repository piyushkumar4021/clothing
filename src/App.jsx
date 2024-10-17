import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Header from './components/Header';
import Login from './page/Login';
import { auth, createUserInDb } from './utils/firebase';
import { useEffect, useState } from 'react';
import Signup from './page/Signup';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      const data = await createUserInDb(userAuth);

      setCurrentUser(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
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
