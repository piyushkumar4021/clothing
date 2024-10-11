import ShopItemPreview from '../components/ShopItemPreview';
import SHOP_DATA from '../data/shopData.json';

const Shop = () => {
  console.log(SHOP_DATA);

  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-semibold mt-8'>Collection</h1>

      {SHOP_DATA.map(({ id, ...delegated }) => (
        <ShopItemPreview key={id} {...delegated} />
      ))}
    </div>
  );
};

export default Shop;
