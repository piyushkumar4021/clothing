import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Header from './components/Header';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import useSyncUser from './hooks/useSyncUser';

function App() {
  useSyncUser();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index Component={Home} />
          <Route path='shop' Component={Shop} />
          <Route path='login' Component={SignIn} />
          <Route path='signup' Component={SignUp} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
