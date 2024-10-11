import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index Component={Home} />
          <Route path='shop' Component={Shop} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
