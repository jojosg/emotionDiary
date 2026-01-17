import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoverSection = () => {
  return (
    <section className='w-full'>
      <Link href='/'>
        <div className='flex gap-2'>
          <Image src='/diary-image.png' alt='Logo' width={30} height={20} className='object-contain' />
          <div className='py-4 text-xl font-bold '>승기의 감정일기장</div>
        </div>
      </Link>

      <div className='relative w-full h-[200px] '>
        <Image src='/diary.jpg' alt='cover' fill className='object-cover rounded-lg' priority />
      </div>
    </section>
  );
};

export default CoverSection;
