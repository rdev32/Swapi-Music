import { FC } from 'react';
import withAuth from './auth/WithAuth';

interface IProps {}

const LikedSongs: FC<IProps> = (props) => {
  return (
    <main style={{ display: 'flex' }}>
      <h1>LikedSongs</h1>
    </main>
  );
};

export default withAuth(LikedSongs);
