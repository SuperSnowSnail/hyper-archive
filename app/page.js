'use client';
import LinkBlock from '@/components/LinkBlock';
import CategoryBtn from '@/components/CategoryBtn';
import CategoryBtnSkeleton from '@/components/CategoryBtnSkeleton';
import CategoriesContainer from '@/components/CategoriesContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data.categories);
      setActiveId(data.categories[0]._id);
      console.log('hi from useeffect!');
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <main className='flex h-screen flex-row gap-5 p-4 md:p-12 lg:p-24'>
      <div className='fixed left-0 top-0 flex h-20 w-screen items-center justify-start gap-5 border-b border-b-twt-light bg-white px-6 lg:hidden'>
        <div
          onClick={() => {
            setIsSidebarShown(true);
          }}
          className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-twt-light text-gray-700'
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </div>
        {isLoading ? (
          <CategoryBtnSkeleton />
        ) : (
          categories.length > 0 && (
            <CategoryBtn
              name={categories.find((c) => c._id === activeId).name}
              id={activeId}
              activeId={activeId}
              isDisabled={true}
            />
          )
        )}
      </div>
      <CategoriesContainer
        isLoading={isLoading}
        categories={categories}
        activeId={activeId}
        setActiveId={setActiveId}
        isSidebarShown={isSidebarShown}
        setIsSidebarShown={setIsSidebarShown}
      />
      <div className='grid h-fit max-h-full w-full grid-cols-1 gap-5 overflow-auto p-2 pt-20 md:grid-cols-2 lg:grid-cols-1 lg:pt-2 xl:grid-cols-2 2xl:grid-cols-3'>
        {isLoading && (
          <div className='flex h-full w-full items-start justify-center'>
            <FontAwesomeIcon icon={faSpinner} spinPulse />
          </div>
        )}
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
        <LinkBlock
          link='https://www.twitch.tv/demondiceofficial'
          title='demondiceofficial - Twitchhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
          description='demon ladyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh music person'
          image='https://i.ytimg.com/vi/9AVSE4JghHE/maxresdefault.jpg'
        />
      </div>
    </main>
  );
}
