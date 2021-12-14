import { FC, useContext } from 'react'
import Song from '../../../components/Spotify/LikedSong/components/Song'
import { LikedSongs } from '../../../hooks/types/GetLikedSongs'
import UserContext from '../../../hooks/UserContext/UserContext'
import UserTrackContext from '../../../hooks/UserTrackContext/UserTrackContext'
import * as S from '../../../styles/components/Spotify/MainSongs/Main.style'

type Props = {
    data: LikedSongs[]
    name?: string
    id?: string | undefined
    type?: string
}

const Songs: FC<Props> = ({
    data: items,
    name: nameFrom,
    id: idFrom,
    type: typeFrom,
}) => {
    const { setTracks } = useContext(UserContext)

    const newTracks = items?.map((item, index) => {
        return {
            id: item.track.id,
            position: index,
            trackname: item.track.name,
            artist: item.track.artists,
            album: {
                id: item.track.album.id,
                name: item.track.album.name,
                type: item.track.album.type,
            },
            duration_ms: item.track.duration_ms,
            images: item.track.album.images[0]?.url,
        }
    })

    const handlePlayId = (id: number) => {
        setTracks({
            tracks: newTracks,
            position: id,
            from: {
                name: nameFrom,
                id: idFrom,
                type: typeFrom,
            },
        })
    }
    return (
        <div>
            {items?.map((song, index) => (
                <S.SongCard key={song.track.id}>
                    <Song
                        song={song}
                        handleId={() => handlePlayId(index)}
                        index={index}
                    />
                </S.SongCard>
            ))}
        </div>
    )
}

export default Songs
