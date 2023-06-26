import CategoryBtn from './CategoryBtn';
import CategoryBtnSkeleton from './CategoryBtnSkeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CategoriesContainer = ({ isLoading, categories, activeId, setActiveId }) => {
  return isLoading ? (
    <div className='flex h-full w-full items-center justify-center'>
      <FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' />
    </div>
  ) : (
    <div className='flex h-full w-full flex-col gap-3 overflow-auto p-2'>
      {categories.length > 0 &&
        categories.map((category) => (
          <CategoryBtn
            key={category._id}
            name={category.name}
            id={category._id}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      <CategoryBtnSkeleton />
    </div>
  );
};

export default CategoriesContainer;
