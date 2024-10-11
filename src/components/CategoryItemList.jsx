import CategoryItem from './CategoryItem';
import items from '../data/categoryItems.json';

const CategoryItemList = () => {
  return (
    <div className='p-3 grid grid-cols-1 md:grid-cols-6 gap-y-3 mx-auto max-w-md md:gap-x-3 md:max-w-full'>
      {items.map(({ slug, ...delegated }) => (
        <CategoryItem key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
};

export default CategoryItemList;
