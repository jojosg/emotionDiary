import React from 'react';
import DIaryItem from './DIaryItem';
import { Diary } from '@/types/diary';

type DiaryListProps = {
  data: Diary[];
};

const DiaryList = ({ data }: DiaryListProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data.map((item) => {
        return <DIaryItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default DiaryList;
