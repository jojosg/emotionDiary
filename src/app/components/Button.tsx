'use client';

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
};

const variantStyles = {
  primary: 'bg-blue-500 text-white border-blue-500',
  secondary: ' text-black border-0',
};

export default function Button({ children, onClick, type = 'button', variant = 'primary' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hover:bg-gray-200 px-1 py-1 text-black rounded border border-solid border-black`}
    >
      {children}
    </button>
  );
}
