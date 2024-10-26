import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const ShoppingCartModal = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className='absolute top-12 right-0 z-10 w-80 h-96 rounded border shadow-2xl bg-neutral-50 p-4 pt-0 gap-4 flex flex-col'>
      <div className='overflow-y-scroll'>
        {cartItems.map(({ id, ...delegated }) => (
          <CartItem key={id} {...delegated} />
        ))}
      </div>
      <button
        type='button'
        className='w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-auto'
      >
        Order Now
      </button>
    </div>
  );
};

export default ShoppingCartModal;
