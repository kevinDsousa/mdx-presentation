import React from 'react';

interface ImageProps {
  src: string;
  size: number;
  circle?: boolean,
}

export function Profile(props: ImageProps) {
  return (
    <img
      src={props.src}
      alt="Imagem"
      width={props.size}
      height={props.size} 
      style={
        props.circle ?
          {
            border: '5px solid #262626',
            borderRadius: '50%'
          }
          :
          {}
      }
    />
  );
};

