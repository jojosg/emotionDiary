import { Diary } from '@/types/diary';
import { emotions } from '@/util/constants';
import { getEmotionImage } from '@/util/get-emotion-image';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

interface ViewerProps {
  emotionId: Diary['emotionId'];
  content: Diary['content'];
}

const Viewer = ({ emotionId, content }: ViewerProps) => {
  const params = useParams();
  const router = useRouter();
  const emotionItem = emotions.find((item) => item.id === emotionId);
  return (
    <div className='min-h-screen bg-base-100'>
      <div className='max-w-2xl px-6 py-20 mx-auto space-y-24'>
        {/* 오늘의 감정 */}
        <section className='space-y-8'>
          <h2 className='text-2xl font-semibold'>오늘의 감정</h2>

          <div className='flex flex-col items-center gap-6'>
            <Image src={getEmotionImage(emotionId)} alt='emotionImg' className='w-32' />
            <p className='text-xl font-medium'>{emotionItem?.name}</p>
          </div>
        </section>

        {/* 오늘의 일기 */}
        <section className='space-y-8'>
          <h2 className='text-2xl font-semibold'>오늘의 일기</h2>

          <p className='w-full p-4 text-lg leading-relaxed text-gray-800 break-words whitespace-pre-line bg-gray-200 rounded-md'>
            {content}
          </p>
        </section>

        {/* 액션 */}
        <section className='flex justify-between pt-10'>
          <button
            onClick={() => {
              router.push('/');
            }}
            className='btn btn-outline'
          >
            뒤로가기
          </button>
          <button
            onClick={() => {
              router.push(`/edit/${params.id}`);
            }}
            className='btn btn-outline btn-success'
          >
            수정하기
          </button>
        </section>
      </div>
    </div>
  );
};

export default Viewer;
