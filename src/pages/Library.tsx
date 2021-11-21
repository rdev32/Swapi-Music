import { FC } from 'react';
import withAuth from './auth/WithAuth';

interface IProps {}

const Library: FC<IProps> = (props) => {
  return (
    <main style={{ display: 'flex' }}>
      <h1>Library</h1>
    </main>
  );
};

export default Library;
