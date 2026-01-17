import { EmotionType } from './get-emotion-image';

type EmotionItem = {
  id: EmotionType;
  name: string;
};

export const emotions: EmotionItem[] = [
  { id: 1, name: '완전 좋음' },
  { id: 2, name: '좋음' },
  { id: 3, name: '보통' },
  { id: 4, name: '별로' },
  { id: 5, name: '완전 별로' },
];
