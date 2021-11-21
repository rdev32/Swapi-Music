import { FC } from 'react';
import * as S from '../../styles/components/NavBar/NavBarStyle';
import List from './components/List';
import Title from './components/Title/Title';

const Menu = ['Home', 'Search'];
const Library = ['Library', 'Liked Songs'];

const NavBar: FC = () => {
  return (
    <S.NavBar>
      <Title />
      <List Title="Menu" Section={Menu} />
      <List Title="Library" Section={Library} />
    </S.NavBar>
  );
};

export default NavBar;
