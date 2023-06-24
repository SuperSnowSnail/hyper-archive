import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const CategoryBtnSkeleton = () => (
  <button className='h-12 w-full rounded-xl bg-blue-500 p-3 font-sans text-gray-100'>
    <div className='flex animate-pulse items-center gap-5'>
      <FontAwesomeIcon icon={faFolder} />
      <div className='h-2 w-40 rounded bg-gray-100' />
    </div>
  </button>
);

export default CategoryBtnSkeleton;
