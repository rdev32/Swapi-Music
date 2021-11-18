import { FC, useContext, useEffect, useState } from 'react';
import useActiveOptContext from '../../hooks/useActiveOptContext/useActiveOptContext';
import * as S from '../../styles/components/NavBar/NavBarStyle';
import List from './components/List';
import Title from './components/Title/Title';

interface IProps {}

const Menu = ['Home', 'Search'];
const Library = ['Library', 'Liked Songs'];

const NavBar: FC<IProps> = (props) => {
  const { active, setActive } = useContext(useActiveOptContext);
  return (
    <S.NavBar>
      <Title />
      <List active={{ active, setActive }} Title="Menu" Section={Menu} />
      <List active={{ active, setActive }} Title="Library" Section={Library} />
    </S.NavBar>
  );
};

export default NavBar;
