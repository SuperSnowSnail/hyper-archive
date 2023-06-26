import CategoryBtn from './CategoryBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CategoriesContainer = ({ isLoading, activeId }) => {
  return isLoading ? (
    <div className='flex h-full w-full items-center justify-center'>
      <FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' />
    </div>
  ) : (
    <div className='flex h-full w-full flex-col gap-3 overflow-auto p-2'>
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='111' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
      <CategoryBtn name='Category nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' id='123' activeId={activeId} />
    </div>
  );
};

export default CategoriesContainer;
