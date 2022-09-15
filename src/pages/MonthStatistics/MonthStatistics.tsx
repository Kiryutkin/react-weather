import React from 'react';
import style from './MonthStatistics.module.scss';

interface Props {
  id: string;
}

export const MonthStatistic = (props: Props) => {
  return <div className={style.home}>Month Statistic</div>;
};
