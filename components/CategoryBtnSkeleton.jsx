import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

/* const CategoryBtnSkeleton = () => (
  <button className='flex h-12 w-full animate-pulse items-center gap-5 rounded-xl bg-slate-300' />
); */

/* const CategoryBtnSkeleton = () => (
  <button className='h-12 w-full rounded-xl bg-blue-500 p-3 font-sans text-gray-100'>
    <div className='flex animate-pulse items-center gap-5'>
      <FontAwesomeIcon icon={faFolder} />
      <div className='h-2 w-40 rounded bg-gray-100' />
    </div>
  </button>
); */

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
