'use client';

import Viewer from '@/app/components/Viewer';
import { useDiaryStore } from '@/store/diaryStore';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const diaryId = Number(params.id);

  const diaries = useDiaryStore((state) => state.diaries);
  const currentDiaryItem = diaries.find((item) => item.id === diaryId);

  if (!currentDiaryItem) {
    return <div>로딩 중...</div>;
  }

  const { emotionId, content } = currentDiaryItem;

  return (
    <div>
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Page;
