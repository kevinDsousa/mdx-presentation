import React from 'react';
import './ReactLogo.css'

const style = {
  logo: 'logo'
}

interface ReactProps {
  size: number,
}

export function ReactLogo({ size }: ReactProps) {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img width={size} height={size} className={style.logo} alt="React logo" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" />
      </a>
    </div>
  );
};
