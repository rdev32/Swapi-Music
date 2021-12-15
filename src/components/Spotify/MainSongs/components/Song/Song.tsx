import Link from 'next/link'
import { FC } from 'react'
import GetTimeSongs from '../../../../../hooks/GetTimeSongs/GetTimeSongs'
import { ITracks } from '../../../../../hooks/types/GetSearch'
import { SongItem } from '../../../../../hooks/types/GetTopSongs'
import * as S from '../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import * as SSMain from '../../../../../styles/components/Spotify/MainSongs/Main.style'
import { GetPlayerIcons } from '../../../../Icons/Icons'
import UserImage from '../../../UserImage/UserImage'
interface IProps {
    item: SongItem | ITracks
    handleId?: () => void
    index: number
}

const Song: FC<IProps> = ({ item, handleId, index }) => {
    const [hour, minutes, seconds] = GetTimeSongs({ ms: item.duration_ms })

    return (
        <S.Song key={item.id}>
            <S.SongMain>
                <S.SongNumberItem>
                    <SSMain.SongNumber>{index + 1}</SSMain.SongNumber>
                    <SSMain.Button onClick={handleId}>
                        <GetPlayerIcons name="playcenter" />
                    </SSMain.Button>
                </S.SongNumberItem>
                {item.album?.images?.length > 0 ? (
                    <UserImage
                        url={item.album.images[0].url}
                        bradius={10}
                        displayName={item.name}
                        size={50}
                    />
                ) : (
                    <UserImage
                        url={item.album.images[0].url}
                        bradius={10}
                        displayName={item.name}
                        size={50}
                        name="songout"
                    />
                )}
                <S.SongDescription>
                    <S.SontTitle>{item.name.slice(0, 25)}</S.SontTitle>
                    <S.SongArtists width={250}>
                        {item.artists.map((artist, index) => (
                            <Link
                                key={artist?.id}
                                href={{
                                    pathname: '/artist/[pid]',
                                    query: {
                                        pid: artist?.id,
                                    },
                                }}
                                passHref
                            >
                                <S.SongArtist>
                                    {index === 0 ? '' : `,`} {artist?.name}
                                </S.SongArtist>
                            </Link>
                        ))}
                    </S.SongArtists>
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
                    <a>{item.album.name}</a>
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
