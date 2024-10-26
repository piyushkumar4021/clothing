/* eslint-disable react/prop-types */

const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <div className='flex pr-4 gap-x-3 mt-4'>
      <div className='relative'>
        <img src={imageUrl} className='w-20 rounded-md' alt={name} />
        <div className='absolute inline-flex items-center justify-center w-7 h-7 text-sm font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2'>
          {quantity}
        </div>
      </div>

      <div className=''>
        <p>{name}</p>
        <p className='text-2xl whitespace-nowrap'>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
