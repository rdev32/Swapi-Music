/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import withAuth from './auth/WithAuth';

const Home = () => {
  return (
    <main style={{ display: 'flex' }}>
      <h1>Home</h1>
    </main>
  );
};

export default withAuth(Home);
