import React from 'react';
import { IButton } from './Button';
import style from './Button.module.css';

export const Button: React.FunctionComponent<IButton.IProps> = ({
  text,
  onClick,
}) => {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
};
