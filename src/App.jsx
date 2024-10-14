import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Header from './components/Header';
import Login from './page/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index Component={Home} />
          <Route path='shop' Component={Shop} />
          <Route path='login' Component={Login} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
