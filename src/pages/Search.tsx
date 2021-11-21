import { FC } from 'react';
import withAuth from './auth/WithAuth';

interface IProps {}

const Search: FC<IProps> = (props) => {
  return (
    <main style={{ display: 'flex' }}>
      <h1>Search</h1>
    </main>
  );
};

export default Search;
