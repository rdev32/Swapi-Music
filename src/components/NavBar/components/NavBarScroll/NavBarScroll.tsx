import { FC } from 'react';
import { NavBarLikedSongs } from '../../../../styles/pages/likedSongs/likedSongs.style';

interface IProps {
  title: string
  scroll: number
}

const NavBarScroll: FC<IProps> = ({title,scroll}) => {
  return (
    <NavBarLikedSongs scroll={scroll}>
      <h1>{title}</h1>
    </NavBarLikedSongs>
  );
}


export default NavBarScroll