import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const LinkBlockImgSkeleton = ({ isImgLoaded = false, isStatic = false }) => (
  <div
    className={`${isImgLoaded ? 'hidden' : 'flex'} h-full w-full ${
      isStatic ? '' : 'animate-pulse'
    } items-center justify-center bg-gray-200 text-gray-500`}
  >
    <FontAwesomeIcon icon={faImage} size='2xl' />
  </div>
);

export default LinkBlockImgSkeleton;
