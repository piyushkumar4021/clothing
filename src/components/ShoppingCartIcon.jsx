import { useDispatch } from 'react-redux';
import CartIcon from '../assets/cart.svg';
import { toggle } from '../redux/features/cart/cartSlice';

const ShoppingCartIcon = () => {
  const itemsCount = 0;
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggle());

  return (
    <div className='w-8 h-8 relative cursor-pointer' onClick={handleClick}>
      <img className='w-8' src={CartIcon} alt='Shopping Cart Icon' />
      <span className='sr-only'>Notifications</span>
      <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-700 border-2 border-white rounded-full -top-2 -end-2'>
        {itemsCount}
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
