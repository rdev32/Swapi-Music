import { FC } from 'react';
import Head from 'next/head';
import url from '../../styles/fonts';

interface IProps {
  title: string;
}

const AppHead: FC<IProps> = (props) => {
  return (
    <Head>
      <link rel="stylesheet" href={url} />
      <title>{props.title}</title>
    </Head>
  );
};

export default AppHead;
