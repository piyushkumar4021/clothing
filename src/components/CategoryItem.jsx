/* eslint-disable react/prop-types */
const CategoryItem = ({ label, size, imgUrl }) => {
  return (
    <div
      className={`${
        size === 'lg' ? 'col-span-3 py-24' : 'col-span-2 py-14'
      } flex justify-center rounded-md transition-[background-size] bg-[length:100%] bg-center ease-in-out shadow duration-[1500ms] hover:bg-[length:150%]`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <button className='shadow px-8 py-4 text-center rounded-md bg-neutral-50 opacity-85 duration-200 hover:opacity-95 hover:shadow-lg'>
        <h2 className='text-2xl'>{label}</h2>
        <p>Shop Now</p>
      </button>
    </div>
  );
};

export default CategoryItem;
