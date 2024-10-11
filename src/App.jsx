import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index Component={Home} />
        <Route path='shop' Component={Shop} />
      </Route>
    </Routes>
  );
}

export default App;
