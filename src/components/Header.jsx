import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const activeClass = 'font-medium text-blue-500';

  return (
    <div className='px-6 py-3 mb-4 shadow flex justify-between items-center'>
      <Link to=''>
        <img className='w-16' src={logo} alt='Fashion Website Logo' />
      </Link>

      <div className='text-xl tracking-wider text-neutral-800 flex gap-x-6'>
        <NavLink
          to=''
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Home
        </NavLink>
        <NavLink
          to='shop'
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Shop
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
