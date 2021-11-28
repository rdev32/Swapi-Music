import Link from 'next/link'
import { FC } from 'react'
import GetTimeSongs from '../../../../../hooks/GetTimeSongs/GetTimeSongs'
import { ITracks } from '../../../../../hooks/types/GetSearch'
import { SongItem } from '../../../../../hooks/types/GetTopSongs'
import * as S from '../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../../../UserImage/UserImage'
interface IProps {
    item: SongItem | ITracks
}

const Song: FC<IProps> = ({ item }) => {
    const [hour, minutes, seconds] = GetTimeSongs({ ms: item.duration_ms })

    return (
        <S.Song key={item.id}>
            <S.SongMain>
                <UserImage
                    url={item.album.images[0].url}
                    bradius={10}
                    displayName={item.name}
                    size={50}
                />
                <S.SongDescription>
                    <S.SontTitle>{item.name.slice(0, 25)}</S.SontTitle>
                    <S.SongArtist>
                        {item.artists
                            .map((name) => name.name)
                            .join(', ')
                            .slice(0, 20)}
                    </S.SongArtist>
                </S.SongDescription>
            </S.SongMain>
            <S.SongTitleAlbum>
                <Link
                    href={{
                        pathname: '/album/[pid]',
                        query: { pid: item.album.id },
                    }}
                    passHref
                >
                    <a>{item.album.name.slice(0, 20)}</a>
                </Link>
            </S.SongTitleAlbum>
            <S.SongMinutesBox>
                <p>
                    {' '}
                    {hour ? `${hour} ${minutes}` : ''}{' '}
                    {!hour
                        ? `${minutes}:${
                              seconds?.toFixed(0).length === 1
                                  ? `0${seconds.toFixed()}`
                                  : seconds?.toFixed()
                          }`
                        : ''}
                </p>
            </S.SongMinutesBox>
        </S.Song>
    )
}

export default Song
