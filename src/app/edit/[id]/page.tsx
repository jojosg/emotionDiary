'use client';

import Editor from '@/app/components/Editor';
import { useDiaryStore } from '@/store/diaryStore';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { EmotionType } from '@/util/get-emotion-image';

const Page = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const diaryId = Number(params.id);

  const diaries = useDiaryStore((state) => state.diaries);
  const updateDiary = useDiaryStore((state) => state.updateDiary);

  const currentDiaryItem = diaries.find((item) => item.id === diaryId);

  useEffect(() => {
    if (!currentDiaryItem) {
      alert('존재하지 않는 일기입니다.');
      router.push('/');
    }
  }, [currentDiaryItem, router]);

  const onSubmit = (input: { createdDate: string; emotionId: EmotionType | null; content: string }) => {
    if (input.emotionId === null) return;

    updateDiary({
      id: diaryId,
      createdDate: new Date(input.createdDate).getTime(),
      emotionId: input.emotionId,
      content: input.content,
    });

    router.push('/');
  };

  if (!currentDiaryItem) return null;

  return (
    <div>
      <div className='mt-4'>오늘의 감정일기</div>
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Page;
