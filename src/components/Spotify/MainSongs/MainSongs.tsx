/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import GetMainSongs from '../../../hooks/GetMainSongs/GetMainSongs';
import { domain } from '../../../assets/spotify';
import UserImage from '../UserImage/UserImage';
import Song from './components/Song/Song';
import { SongItem } from '../../../hooks/GetMainSongs/types';
import * as S from '../../../styles/components/Spotify/MainSongs/Main.style';
interface IProps {}

const MainSongs: FC<IProps> = (props) => {
  const { items } = GetMainSongs(`${domain}/top/tracks?limit=5`);
  return (
    <div>
      <h2>Top Tracks this month</h2>
      <div>
        {items?.map((item: SongItem, index: number) => (
          <S.SongCard key={item.id}>
            <S.SongNumber>{index + 1}</S.SongNumber>
            <Song item={item} />
          </S.SongCard>
        ))}
      </div>
    </div>
  );
};

export default MainSongs;
