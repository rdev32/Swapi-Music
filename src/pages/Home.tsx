/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext';
import withAuth from './auth/WithAuth';

const Home = () => {
  const { setActive } = useContext(useActiveOptContext);
  useEffect(() => {
    setActive('Home');
  }, []);

  return (
    <main style={{ display: 'flex' }}>
      <NavBar />
      <h1>Home</h1>
    </main>
  );
};

export default withAuth(Home);
