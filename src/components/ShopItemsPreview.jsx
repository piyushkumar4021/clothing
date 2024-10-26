/* eslint-disable react/prop-types */
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';

const ShopItemsPreview = ({ title, items, routeName }) => {
  return (
    <div className='mt-6 px-3'>
      <Link to={routeName} className='text-3xl inline-block mb-5'>
        {title}
      </Link>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mx-auto'>
        {items
          .filter((_, i) => i < 4)
          .map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ShopItemsPreview;
