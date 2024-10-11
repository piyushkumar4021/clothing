/* eslint-disable react/prop-types */
import ShopItem from './ShopItem';
const ShopItemPreview = ({ title, items }) => {
  return (
    <div>
      <h2 className='text-3xl'>{title}</h2>

      <div className='flex flex-wrap gap-x-5 gap-y-6 justify-center items-start'>
        {items.map(({ id, ...delegated }) => (
          <ShopItem key={id} {...delegated} />
        ))}
      </div>
    </div>
  );
};

export default ShopItemPreview;
