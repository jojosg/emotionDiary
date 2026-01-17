'use client';

import { getEmotionImage } from '@/util/get-emotion-image';
import Image from 'next/image';
import { emotions } from '@/util/constants';
import { Diary } from '@/types/diary';
import { useRouter } from 'next/navigation';
import { HiX } from 'react-icons/hi';
import { getEmotionBg } from '@/util/get-emotion-bg';
import { useDiaryStore } from '@/store/diaryStore';

const DiaryItem = ({ id, emotionId, content, createdDate }: Diary) => {
  const router = useRouter();
  const deleteDiary = useDiaryStore((state) => state.deleteDiary);

  const emotionItem = emotions.find((item) => item.id === emotionId);

  const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const isConfirmed = window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!');
    if (!isConfirmed) return;

    deleteDiary(id);
    router.push('/');
  };

  return (
    <div className='relative border border-gray-200 rounded-xl'>
      <div
        className={`py-10 rounded-xl rounded-b-none ${getEmotionBg(emotionId)}`}
        onClick={() => router.push(`/diary/${id}`)}
      >
        <Image src={getEmotionImage(emotionId)} width={80} height={80} alt='emotionImg' className='mx-auto' />
        <button onClick={onClickDelete} className='absolute top-2 right-2'>
          <HiX className='text-xl' />
        </button>
      </div>

      <div className='px-4 py-2'>
        <div className='flex items-center justify-between mt-2'>
          <div className='text-lg font-medium'>{emotionItem?.name}</div>
          <div className='text-sm text-gray-400'>{new Date(createdDate).toLocaleDateString('ko-KR')}</div>
        </div>
        <div className='mt-6 mb-2 text-base break-words line-clamp-4'>{content}</div>
      </div>
    </div>
  );
};

export default DiaryItem;
