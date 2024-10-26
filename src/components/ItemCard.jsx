/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cart/cartSlice';

const ItemCard = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow w-full'>
      <img
        className='rounded-t-lg w-full h-64 object-cover'
        src={imageUrl}
        alt={name}
      />
      <div className='p-5 pb-3'>
        <div className='flex justify-between items-center'>
          <h5 className='mb-2 text-2xl tracking-tight text-gray-900'>{name}</h5>
          <p className='text-2xl font-medium'>${price}</p>
        </div>

        <button
          type='button'
          onClick={() => dispatch(addItem(item))}
          className='mr-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
