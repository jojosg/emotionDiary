import React, { ReactNode } from 'react';
import Button from './Button';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BsList } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  date: ReactNode;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Header = ({ date, onIncrease, onDecrease }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className='mt-4 sm:flex sm:justify-between'>
      <div className='flex gap-[0.63rem]  '>
        <div className='flex items-center'>
          <BsList className='mr-1' />
          감정 모아보기
        </div>
        <div className='flex items-center'>
          <div className='w-[100px]'>{date}</div>
          <div className='flex gap-1 ml-2'>
            <Button variant='secondary' onClick={onDecrease}>
              <IoIosArrowBack />
            </Button>
            <Button variant='secondary' onClick={onIncrease}>
              <IoIosArrowForward />
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-1 sm:mt-0'>
        <button
          onClick={() => {
            router.push('/new');
          }}
          className='text-white btn btn-success  bg-[#326CB6] hover:bg-[#23599F] border-none'
        >
          새 일기 쓰기
        </button>
      </div>
    </div>
  );
};

export default Header;
