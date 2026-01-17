import { EmotionType } from '@/util/get-emotion-image';

export type Diary = {
  id: number;
  createdDate: number;
  emotionId: EmotionType;
  content: string;
};

export type CreateDiaryPayload = {
  createdDate: number;
  emotionId: EmotionType;
  content: string;
};

export type UpdateDiaryPayload = {
  id: number;
  createdDate: number;
  emotionId: EmotionType;
  content: string;
};

export type DeleteDiaryPayload = {
  id: number;
};
