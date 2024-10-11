/* eslint-disable react/prop-types */
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';

const ShopItemPreview = ({ title, items, routeName }) => {
  return (
    <div className='mt-6'>
      <Link to={routeName} className='text-3xl inline-block mb-3'>
        {title}
      </Link>

      <div className='grid grid-cols-4 gap-4'>
        {items
          .filter((_, i) => i < 4)
          .map(({ id, ...delegated }) => (
            <ShopItem key={id} {...delegated} />
          ))}
      </div>
    </div>
  );
};

export default ShopItemPreview;
