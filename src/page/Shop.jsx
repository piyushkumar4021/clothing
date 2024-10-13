import ShopItemsPreview from '../components/ShopItemsPreview';
import SHOP_DATA from '../data/shopData.json';

const Shop = () => {
  return (
    <div className='container mx-auto mb-7 px-3'>
      <h1 className='text-5xl font-semibold mt-8'>Collection</h1>

      {SHOP_DATA.map(({ id, ...delegated }) => (
        <ShopItemsPreview key={id} {...delegated} />
      ))}
    </div>
  );
};

export default Shop;
