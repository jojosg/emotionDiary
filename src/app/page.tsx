'use client';

import { useState } from 'react';
import Header from './components/Header';
import DiaryList from './components/DiaryList';
import { useDiaryStore } from '@/store/diaryStore';

export default function Home() {
  // Zustand에서 일기 데이터 가져오기
  const diaries = useDiaryStore((state) => state.diaries);

  // 기준 날짜
  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  // 해당 월 일기만 필터링
  const getMonthlyData = () => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();

    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

    return diaries.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
  };

  const monthlyData = getMonthlyData();

  return (
    <div className='min-h-screen'>
      <Header
        date={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        onIncrease={onIncreaseMonth}
        onDecrease={onDecreaseMonth}
      />

      <DiaryList data={monthlyData} />
    </div>
  );
}
