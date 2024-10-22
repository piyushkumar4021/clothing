import ShoppingCartIcon from './ShoppingCartIcon';
import ShoppingCartModal from './ShoppingCartModal';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const isHidden = useSelector((state) => state.cart.isHidden);

  return (
    <div className='relative'>
      <ShoppingCartIcon />
      {!isHidden && <ShoppingCartModal />}
    </div>
  );
};

export default ShoppingCart;
