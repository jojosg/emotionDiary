'use client';

import Editor from '../components/Editor';
import { useDiaryStore } from '@/store/diaryStore';
import { EmotionType } from '@/util/get-emotion-image';

type EditorInput = {
  createdDate: string;
  emotionId: EmotionType | null;
  content: string;
};

const Page = () => {
  const createDiary = useDiaryStore((state) => state.createDiary);

  const onSubmit = (input: EditorInput) => {
    if (input.emotionId === null) return;

    createDiary({
      createdDate: new Date(input.createdDate).getTime(),
      emotionId: input.emotionId,
      content: input.content,
    });
  };

  return (
    <div>
      <div className='mt-4'>오늘의 감정일기</div>
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default Page;
