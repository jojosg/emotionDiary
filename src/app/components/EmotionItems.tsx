import { EmotionType, getEmotionImage } from '@/util/get-emotion-image';
import Image from 'next/image';
import React from 'react';

interface EmotionItemsProps {
  emotionName: string;
}

interface EmotionItemsEmotionProps {
  emotionId: EmotionType;
}

type Props = EmotionItemsProps &
  EmotionItemsEmotionProps & {
    isSelected: boolean;
    onClick: () => void;
  };

const emotionColorMap: Record<EmotionType, string> = {
  1: 'bg-[#FDE5DD]',
  2: 'bg-[#FBF7CC]',
  3: 'bg-[#E3F3E6]',
  4: 'bg-[#E1ECF5]',
  5: 'bg-[#E9D6EA]',
};

const EmotionItems = ({ emotionName, emotionId, isSelected, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-center items-center cursor-pointer text-center border border-1 rounded-md py-4 px-12 mt-4 transition-colors duration-200
      ${isSelected ? emotionColorMap[emotionId] : 'border-gray-300'}`}
    >
      <div className='py-2 mt-2'>
        <Image src={getEmotionImage(emotionId)} alt='emotionName' width={72} height={72} />
      </div>
      <div>{emotionName}</div>
    </div>
  );
};

export default EmotionItems;
