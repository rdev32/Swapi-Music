import { FC, useState } from 'react';
import { SongItem } from '../../../../../hooks/GetMainSongs/types';
import UserImage from '../../../UserImage/UserImage';
import * as S from '../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style';
interface IProps {
  item: SongItem;
}

const Song: FC<IProps> = ({ item }) => {
  const [duration, setDuration] = useState(
    new Date((item.duration_ms = 100 * Math.round(item.duration_ms / 100)))
  );

  return (
    <S.Song key={item.id}>
      <S.SongMain>
        <UserImage
          url={item.album.images[0].url}
          bradius={10}
          displayName={item.name}
          size={60}
        />
        <S.SongDescription>
          <S.SontTitle>{item.name}</S.SontTitle>
          <S.SongArtist>{item.artists[0].name}</S.SongArtist>
        </S.SongDescription>
      </S.SongMain>
      <S.SongTitleAlbum>
        <p>{item.album.name}</p>
      </S.SongTitleAlbum>
      <div>
        <p>
          {duration.getMinutes()}:
          {duration.getSeconds() === 1
            ? `0${duration.getSeconds()}`
            : duration.getSeconds()}
        </p>
      </div>
    </S.Song>
  );
};

export default Song;
