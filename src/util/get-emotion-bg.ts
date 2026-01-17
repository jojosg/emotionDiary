import { EmotionType } from './get-emotion-image';

export const getEmotionBg = (emotionId: EmotionType) => {
  switch (emotionId) {
    case 1: // 행복
      return 'bg-[#FDE5DD]';
    case 2: // 기쁨
      return 'bg-[#FBF7CC]';
    case 3: // 보통
      return 'bg-[#E3F3E6]';
    case 4: // 슬픔
      return 'bg-[#E1ECF5]';
    case 5: // 화남
      return 'bg-[#E9D6EA]';
    default:
      return 'bg-gray-100';
  }
};
