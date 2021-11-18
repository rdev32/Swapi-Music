import { FC, useContext, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext';
import withAuth from './auth/WithAuth';

interface IProps {}

const LikedSongs: FC<IProps> = (props) => {
  const { setActive } = useContext(useActiveOptContext);
  useEffect(() => {
    setActive('Liked Songs');
  }, []);
  return (
    <main style={{ display: 'flex' }}>
      <NavBar />
      <h1>LikedSongs</h1>
    </main>
  );
};

export default withAuth(LikedSongs);
