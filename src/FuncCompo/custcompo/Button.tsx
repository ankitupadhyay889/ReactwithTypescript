import React from 'react';

type pass = {
    children?: React.ReactNode;
    color?: string;
    onClick: ((e: React.MouseEvent<HTMLButtonElement , MouseEvent>) => void);
    height: string;
    border: string;
    width: string;
    radius: string;
}

const Button: React.FC<pass> = ({ 
    border,
    color,
    children,
    height,
    onClick,
    width,
    radius
  }) => { 
  return (
    <button onClick={onClick} style={{backgroundColor: color,border,height,width, borderRadius: radius}}>{children}</button>
  );
}
export default Button;