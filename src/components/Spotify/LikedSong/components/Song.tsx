import { FC, useEffect, useState } from 'react'
import { LikedSongs } from '../../../../hooks/types/GetLikedSongs'
import * as SSong from '../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../../UserImage/UserImage'
import Link from 'next/link'

interface IProps {
    song: LikedSongs
}

const Song: FC<IProps> = ({ song }) => {
    const [duration, setDuration] = useState('')

    useEffect(() => {
        const minutes = Math.floor(song.track.duration_ms / 60000)
        const seconds = ((song.track.duration_ms % 60000) / 1000).toFixed()
        const zero = minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds
        setDuration(zero)
    }, [song.track.duration_ms])
    return (
        <SSong.Song key={song.track.id}>
            <SSong.SongMain>
                <UserImage
                    url={song.track.album.images[0].url}
                    displayName={song.track.album.name}
                    size={50}
                    bradius={10}
                />
                <SSong.SongDescription>
                    <SSong.SontTitle>{song.track.name}</SSong.SontTitle>
                    <SSong.SongArtist>
                        {song.track.artists
                            .map((name) => `${name.name}`)
                            .join(', ')}
                    </SSong.SongArtist>
                </SSong.SongDescription>
            </SSong.SongMain>
            <SSong.SongTitleAlbum>
                <Link
                    href={{
                        pathname: '/album/[pid]',
                        query: { pid: song.track.album.id },
                    }}
                    passHref
                >
                    <a>{song.track.album.name}</a>
                </Link>
            </SSong.SongTitleAlbum>
            <SSong.SongMinutesBox>
                <p>{duration}</p>
            </SSong.SongMinutesBox>
        </SSong.Song>
    )
}

export default Song
