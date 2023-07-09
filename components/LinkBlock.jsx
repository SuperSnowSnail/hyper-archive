import Image from 'next/image';
import { useState } from 'react';
import LinkBlockImgSkeleton from './LinkBlockImgSkeleton';

const LinkBlock = ({ link, title, description, image }) => {
  const url = new URL(link);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex h-[132px] overflow-hidden rounded-2xl border border-twt-light no-underline transition-twt duration-200 hover:bg-[rgba(0,0,0,0.03)] focus-visible:outline-[blue]'
    >
      <div className='h-twt-img w-twt-img flex-shrink-0 border-r border-r-twt-light'>
        <Image
          width={130}
          height={130}
          src={image}
          alt={title}
          draggable='true'
          loading='lazy'
          onLoad={() => {
            setIsImgLoaded(false);
          }}
          onLoadingComplete={() => {
            setIsImgLoaded(true);
          }}
          className={`${isImgLoaded ? '' : '!h-0 !w-0 '} object-cover`}
        />
        <LinkBlockImgSkeleton isImgLoaded={isImgLoaded} />
      </div>
      <div className='flex w-[calc(100%-131px)] flex-col justify-center gap-0.5 whitespace-nowrap p-3 font-twt text-twt [&>span]:overflow-hidden [&>span]:text-ellipsis'>
        <span>{url.host}</span>
        <span className='text-twt-dark'>{title}</span>
        <span className='line-clamp-2 whitespace-normal'>{description}</span>
      </div>
    </a>
  );
};

export default LinkBlock;
