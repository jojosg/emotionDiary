import { Jua } from 'next/font/google';
import './globals.css';
import CoverSection from './components/CoverSection';

const jua = Jua({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: '나만의 감정일기장',
  description: '나의 감정을 기록하는 일기장',
  icons: {
    icon: '/diary-image.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body
        className={`
          ${jua.className}
          antialiased
          min-h-screen
          text-lg

          w-full
          max-w-5xl
          mx-auto

          px-4              /* mobile: 16px */
          tablet:px-6       /* tablet (≥744px): 24px */
          desktop:px-8      /* desktop (≥1280px): 32px */
        `}
      >
        <CoverSection />
        {children}
      </body>
    </html>
  );
}
