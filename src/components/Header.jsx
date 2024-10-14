import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const activeClass = 'font-medium text-blue-500';

  return (
    <div className='px-6 py-3 mb-4 shadow flex justify-between items-center'>
      <Link to='/'>
        <img className='w-12 sm:w-16' src={logo} alt='Fashion Website Logo' />
      </Link>

      <div className='text-lg tracking-wider text-neutral-800 flex gap-x-6'>
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
        <NavLink
          to='login'
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
