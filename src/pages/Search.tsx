import { FC, useContext, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext';
import withAuth from './auth/WithAuth';

interface IProps {}

const Search: FC<IProps> = (props) => {
  const { setActive } = useContext(useActiveOptContext);
  useEffect(() => {
    setActive('Search');
  }, []);
  return (
    <main style={{ display: 'flex' }}>
      <NavBar />
      <h1>Search</h1>
    </main>
  );
};

export default withAuth(Search);
