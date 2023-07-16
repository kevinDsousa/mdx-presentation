import React from 'react';

type TitleProps = {
  text: string;
  size?: number;
  color?: string;
};

export function Titles({ text, size = 24, color = 'black' }: TitleProps) {
  return <h1 style={{ fontSize: size, color }}>{text}</h1>;
}

