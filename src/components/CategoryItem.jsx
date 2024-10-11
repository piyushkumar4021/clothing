/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const CategoryItem = ({ slug, label, size, imgUrl }) => {
  return (
    <div
      className={`${
        size === 'lg' ? 'col-span-3 py-24' : 'col-span-2 py-14'
      } flex justify-center rounded-md transition-[background-size] bg-[length:100%] bg-center ease-in-out shadow duration-[1500ms] hover:bg-[length:150%]`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <Link
        className='shadow px-8 py-4 text-center rounded-md bg-neutral-50 opacity-85 duration-200 hover:opacity-95 hover:shadow-lg'
        to={`shop/${slug}`}
      >
        <h2 className='text-2xl'>{label}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
