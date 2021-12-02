import { FC, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    GetPlaylistId,
    GetTrackPlaylistId,
} from '../../hooks/types/GetPlayListId'
import GetData from '../../hooks/GetData/GetData'
import * as S from '../../styles/components/Spotify/MainSongs/Main.style'
// import Song from '../../components/playlist/components/Songs/Song'
import Song from '../../components/Spotify/LikedSong/components/Song'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import { LikedSongs } from '../../hooks/types/GetLikedSongs'
import { spotify } from '../../assets/spotify'

const Playlists: FC = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `${spotify}v1/playlists/${pid}` : ''
    const { tracks: useTracks, setTracks } = useContext(UserTrackContext)

    const handlePlayId = (id: number) => {
        setTracks({ ...useTracks, position: id })
    }

    const { tracks } = GetData<GetPlaylistId>(url)

    useEffect(() => {
        tracks?.items &&
            setTracks({
                ...useTracks,
                tracks: tracks.items.map(({ track }) => track),
            })
    }, [tracks])
    return (
        <div>
            {tracks?.items?.map((track: LikedSongs, index: number) => (
                <S.SongCard key={`${track.track.id}`}>
                    <div style={{ width: '1%' }}>
                        <p>{index + 1}</p>
                    </div>
                    <button onClick={() => handlePlayId(index)}>Play</button>
                    <Song key={track.track.id} song={track} />
                </S.SongCard>
            ))}
        </div>
    )
}

export default Playlists
