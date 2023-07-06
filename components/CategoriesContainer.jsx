import CategoryBtn from './CategoryBtn';
import CategoryBtnSkeleton from './CategoryBtnSkeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const CategoriesContainer = ({ isLoading, categories, activeId, setActiveId, isSidebarShown, setIsSidebarShown }) => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  useEffect(() => {
    if (!isLargeScreen) {
      setIsSidebarShown(false);
    } else {
      setIsSidebarShown(true);
    }
  }, [isLargeScreen, setIsSidebarShown]);

  return (
    <div
      onClick={(e) => {
        if (e.currentTarget != e.target) return;
        setIsSidebarShown(false);
      }}
      className={`${
        isSidebarShown ? 'flex' : 'hidden'
      } fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm lg:static lg:flex lg:h-auto lg:w-auto lg:bg-transparent`}
    >
      <div className=' h-5/6 w-72 flex-none overflow-hidden rounded-2xl border border-twt-light bg-white md:h-1/2 lg:h-full'>
        <div className='flex h-14 w-full items-center justify-end p-3 lg:hidden'>
          <div
            onClick={() => {
              setIsSidebarShown(false);
            }}
            className='flex h-8 w-8 items-center justify-center rounded border border-twt-light text-gray-500'
          >
            <FontAwesomeIcon icon={faXmark} size='lg' />
          </div>
        </div>
        <div className='flex h-[calc(100%-56px)] w-full flex-col gap-3 overflow-auto p-3 lg:h-full'>
          {isLoading ? (
            <>
              <CategoryBtnSkeleton />
              <CategoryBtnSkeleton />
              <CategoryBtnSkeleton />
            </>
          ) : (
            categories.length > 0 &&
            categories.map((category) => (
              <CategoryBtn
                key={category._id}
                name={category.name}
                id={category._id}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesContainer;
