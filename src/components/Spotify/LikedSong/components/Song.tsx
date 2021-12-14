import Link from 'next/link'
import { FC, useContext } from 'react'
import GetTimeSongs from '../../../../hooks/GetTimeSongs/GetTimeSongs'
import { LikedSongs } from '../../../../hooks/types/GetLikedSongs'
import UserContext from '../../../../hooks/UserContext/UserContext'
import * as SSong from '../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import * as SSMain from '../../../../styles/components/Spotify/MainSongs/Main.style'
import { GetPlayerIcons } from '../../../Icons/Icons'
import UserImage from '../../UserImage/UserImage'

interface IProps {
    song: LikedSongs
    index: number
    handleId?: () => void
}

const Song: FC<IProps> = ({ song, handleId, index }) => {
    const { recent, setRecent } = useContext(UserContext)
    const [hour, minutes, seconds] = GetTimeSongs({
        ms: song?.track?.duration_ms,
    })

    const handleMiddleClick = (payload: any) => {
        if (recent.find((item) => item.id === payload.id)) {
            return
        } else if (recent.length < 6) {
            setRecent([payload, ...recent])
        } else {
            setRecent([payload, ...recent.slice(0, 6)])
        }
    }

    // const payload = (id: number) => {
    //     return {
    //         id: song?.track.artists[id].id,
    //         tag: song?.track?.artists[id]?.name,
    //         type: 'artist',
    //         image: song?.track?.artists?[id]?.images[id]?.url,
    //         url: `/artist/${song?.track?.artists[id]?.id}`,
    //     }
    // }
    return (
        <SSong.Song key={song?.track?.id}>
            <SSong.SongMain>
                <SSong.SongNumberItem>
                    <SSMain.SongNumber>{index + 1}</SSMain.SongNumber>
                    <SSMain.Button onClick={handleId}>
                        <GetPlayerIcons name="playcenter" />
                    </SSMain.Button>
                </SSong.SongNumberItem>
                {song?.track?.album?.images?.length > 0 ? (
                    <UserImage
                        url={song?.track?.album?.images[0]?.url}
                        displayName={song.track.album.name}
                        size={55}
                        bradius={10}
                        name="songout"
                    />
                ) : (
                    <UserImage
                        url={song?.track?.album?.images[0]?.url}
                        displayName={song.track.album.name}
                        size={55}
                        bradius={10}
                        name="songout"
                    />
                )}
                <SSong.SongDescription>
                    <SSong.SontTitle>{song?.track?.name}</SSong.SontTitle>
                    <SSong.SongArtists>
                        {song?.track?.artists.map((artist, index) => (
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
                                <SSong.SongArtist
                                // onClick={() =>
                                //     handleMiddleClick(payload(index))
                                // }
                                >
                                    {index === 0 ? '' : `,`} {artist?.name}
                                </SSong.SongArtist>
                            </Link>
                        ))}
                    </SSong.SongArtists>
                </SSong.SongDescription>
            </SSong.SongMain>
            <SSong.SongTitleAlbum>
                <Link
                    href={{
                        pathname: '/album/[pid]',
                        query: { pid: song?.track?.album?.id },
                    }}
                    passHref
                >
                    <a>{song?.track?.album?.name}</a>
                </Link>
            </SSong.SongTitleAlbum>
            <SSong.SongMinutesBox>
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
            </SSong.SongMinutesBox>
        </SSong.Song>
    )
}

export default Song
