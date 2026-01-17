'use client';

import React, { useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegFaceSmile } from 'react-icons/fa6';
import EmotionItems from './EmotionItems';
import { EmotionType } from '@/util/get-emotion-image';
import { useRouter } from 'next/navigation';
import { emotions } from '@/util/constants';

type EditorInput = {
  createdDate: string;
  emotionId: EmotionType | null;
  content: string;
};

type EditorProps = {
  initData?: {
    createdDate: number;
    emotionId: EmotionType;
    content: string;
  };
  onSubmit: (input: EditorInput) => void;
};

const Editor = ({ initData, onSubmit }: EditorProps) => {
  const router = useRouter();
  const getStringedDate = (targetDate: Date): string => {
    let year = targetDate.getFullYear();
    let month = String(targetDate.getMonth() + 1).padStart(2, '0');
    let date = String(targetDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
  };

  const [input, setInput] = useState<EditorInput>({
    createdDate: getStringedDate(new Date()),
    emotionId: null,
    content: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'createdDate' || name === 'content') {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
    router.push('/');
  };

  useEffect(() => {
    if (initData) {
      setInput({
        createdDate: getStringedDate(new Date(initData.createdDate)),
        emotionId: initData.emotionId,
        content: initData.content,
      });
    }
  }, [initData]);

  return (
    <div>
      <section className='flex gap-1 mt-4'>
        <div className='flex items-center gap-1 '>
          <FaRegCalendarAlt />
          <h4 className='text-gray-800'>날짜</h4>
        </div>
        <input
          name='createdDate'
          type='date'
          value={input.createdDate}
          onChange={onChangeInput}
          className='px-2 bg-gray-200 rounded-md'
          onClick={(e) => e.currentTarget.showPicker()}
        />
      </section>
      <section className='mt-4'>
        <div className='flex items-center gap-1 '>
          <div>
            <FaRegFaceSmile />
          </div>
          <div>오늘의 감정</div>
        </div>
        <div className='flex flex-wrap justify-center gap-2 mt-2 md:grid md:grid-cols-5 md:justify-items-center'>
          {emotions.map(({ id, name }) => (
            <EmotionItems
              key={id}
              emotionId={id}
              emotionName={name}
              isSelected={input.emotionId === id}
              onClick={() =>
                setInput({
                  ...input,
                  emotionId: id,
                })
              }
            />
          ))}
        </div>
      </section>
      <section className='mt-4'>
        <div>오늘의 일기</div>
        <textarea
          placeholder='오늘은 어땠나요?'
          name='content'
          value={input.content}
          onChange={onChangeInput}
          className='p-4 w-full min-h-[12.50rem] bg-gray-200 rounded-md mt-2'
        />
      </section>
      <section className='flex justify-between mt-4'>
        <button
          onClick={() => {
            router.push('/');
          }}
          className='btn btn-soft'
        >
          취소하기
        </button>
        <button onClick={onClickSubmitButton} className='btn btn-outline btn-success'>
          작성완료
        </button>
      </section>
    </div>
  );
};

export default Editor;
