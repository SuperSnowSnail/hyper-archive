import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const CategoryBtn = ({ name, id, activeId, setActiveId, isDisabled = false }) => {
  const isActive = id === activeId;

  return (
    <button
      disabled={isDisabled}
      onClick={() => {
        setActiveId(id);
      }}
      className={`flex h-12 w-full max-w-[262px] items-center gap-5 rounded-xl ${
        isActive ? 'bg-blue-700' : 'bg-blue-500'
      } p-3 font-sans text-gray-100 hover:bg-blue-600 active:bg-blue-700`}
    >
      <FontAwesomeIcon icon={isActive ? faFolderOpen : faFolder} />
      <span className='inline-block w-full truncate text-left'>{name}</span>
    </button>
  );
};

export default CategoryBtn;
