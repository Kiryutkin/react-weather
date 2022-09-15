import React from 'react';
import style from './Home.module.scss';

interface Props {
  id: string;
}

export const Home = (props: Props) => {
  return <div className={style.home}>Home</div>;
};
