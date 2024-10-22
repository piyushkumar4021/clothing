const ShoppingCartModal = () => {
  return (
    <div className='absolute top-12 right-0 z-10 w-72 h-96 rounded border shadow-2xl bg-neutral-50 p-4 gap-4 flex flex-col'>
      <div className='overflow-y-auto '></div>
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
