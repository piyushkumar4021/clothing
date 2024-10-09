import CategoryItem from './CategoryItem';
import items from '../data/categoryItems.json';

const CategoryItemList = () => {
  return (
    <div className='p-3 grid grid-cols-6 gap-3'>
      {items.map(({ slug, ...delegated }) => (
        <CategoryItem key={slug} {...delegated} />
      ))}
    </div>
  );
};

export default CategoryItemList;
