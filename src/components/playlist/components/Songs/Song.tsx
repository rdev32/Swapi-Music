import Link from 'next/link'
import { FC } from 'react'
import GetTimeSongs from '../../../../hooks/GetTimeSongs/GetTimeSongs'
import { Track } from '../../../../hooks/types/GetPlayListId'
import * as S from '../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../../../Spotify/UserImage/UserImage'

interface IProps {
    track: Track
}

const Song: FC<IProps> = ({ track }) => {
    const [hour, minutes, seconds] = GetTimeSongs({ ms: track?.duration_ms })

    return (
        <S.Song key={track?.id}>
            <UserImage
                url={track?.album?.images[0]?.url}
                bradius={10}
                displayName={track.album.name}
                size={112}
            />
            <S.SongMain>
                <S.SongDescription>
                    <S.SontTitle>{track?.name}</S.SontTitle>
                    <S.SongArtist>{track?.artists[0].name}</S.SongArtist>
                </S.SongDescription>
            </S.SongMain>
            <S.SongTitleAlbum>
                <Link
                    href={{
                        pathname: '/album/[pid]',
                        query: { pid: track.album.id },
                    }}
                    passHref
                >
                    <a>{track.album.name}</a>
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
