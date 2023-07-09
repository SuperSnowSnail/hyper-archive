import LinkBlockImgSkeleton from './LinkBlockImgSkeleton';

const LinkBlockSkeleton = () => (
  <div className='flex h-[132px] cursor-not-allowed overflow-hidden rounded-2xl border border-twt-light transition-twt duration-200 hover:bg-[rgba(0,0,0,0.03)] focus-visible:outline-[blue]'>
    <div className='h-twt-img w-twt-img flex-shrink-0 border-r border-r-twt-light'>
      <LinkBlockImgSkeleton />
    </div>
    <div className='flex w-[calc(100%-131px)] animate-pulse flex-col justify-center gap-4 p-3'>
      <div className='h-3 w-5/12 rounded bg-gray-300' />
      <div className='h-3 w-11/12 rounded bg-gray-400' />
      <div className='h-3 w-9/12 rounded bg-gray-300' />
    </div>
  </div>
);

export default LinkBlockSkeleton;
