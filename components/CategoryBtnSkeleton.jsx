import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CategoryBtnSkeleton = () => (
  <button
    className='flex h-12 w-full max-w-[270px] cursor-not-allowed items-center gap-5 rounded-xl bg-blue-300 p-3 font-sans text-gray-200'
    disabled
  >
    <FontAwesomeIcon icon={faSpinner} spinPulse />
    <div className='h-2 w-40 animate-pulse rounded bg-gray-200' />
  </button>
);

export default CategoryBtnSkeleton;
