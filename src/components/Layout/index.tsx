import React from 'react';
import { ILayout } from './Layout';
import style from './Layout.module.css';

export const Layout: React.FunctionComponent<ILayout.IProps> = ({
  children,
}) => {
  return <div className={`${style.layout} w-screen h-screen`}>{children}</div>;
};
