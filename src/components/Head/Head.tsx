import Head from "next/head";
import { FC } from "react";
import url from "../../styles/fonts";

const AppHead: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <link rel="stylesheet" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

export default AppHead;
