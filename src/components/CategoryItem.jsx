/* eslint-disable react/prop-types */
const CategoryItem = ({ label, size }) => {
  return (
    <div
      className={`border-2 border-zinc-800 flex justify-center ${
        size === 'lg' ? 'col-span-3 py-20' : 'col-span-2 py-10'
      }`}
    >
      <div className='border-2 border-zinc-600 px-10 py-4 text-center'>
        <h2>{label}</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
