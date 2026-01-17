import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Diary, CreateDiaryPayload, UpdateDiaryPayload } from '@/types/diary';

type DiaryStore = {
  diaries: Diary[];
  lastId: number;

  createDiary: (payload: CreateDiaryPayload) => void;
  updateDiary: (payload: UpdateDiaryPayload) => void;
  deleteDiary: (id: number) => void;
};

export const useDiaryStore = create<DiaryStore>()(
  persist(
    (set, get) => ({
      diaries: [],
      lastId: 0,

      /** 생성 */
      createDiary: ({ createdDate, emotionId, content }) => {
        const newId = get().lastId + 1;

        const newDiary: Diary = {
          id: newId,
          createdDate,
          emotionId,
          content,
        };

        set({
          diaries: [newDiary, ...get().diaries],
          lastId: newId,
        });
      },

      /** 수정 */
      updateDiary: ({ id, createdDate, emotionId, content }) => {
        set({
          diaries: get().diaries.map((item) => (item.id === id ? { id, createdDate, emotionId, content } : item)),
        });
      },

      /** 삭제 */
      deleteDiary: (id) => {
        set({
          diaries: get().diaries.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: 'diary-storage', // localStorage key
    }
  )
);
