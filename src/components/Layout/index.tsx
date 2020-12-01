import React from 'react';
import { ILayout } from './Layout';
import style from './Layout.module.css';

export const Layout: React.FunctionComponent<ILayout.IProps> = ({
  children,
}) => {
  return (
    <div
      className={`${style.layout} w-screen h-screen flex flex-col items-center relative`}
    >
      <div className="mt-8 mb-32 z-10">
        <img src="/logo.svg" />
      </div>
      {children}
    </div>
  );
};
