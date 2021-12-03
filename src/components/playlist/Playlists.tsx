import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { spotify } from '../../assets/spotify'
import Song from '../../components/Spotify/LikedSong/components/Song'
import GetData from '../../hooks/GetData/GetData'
import { LikedSongs } from '../../hooks/types/GetLikedSongs'
import { GetPlaylistId } from '../../hooks/types/GetPlayListId'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import * as S from '../../styles/components/Spotify/MainSongs/Main.style'

const Playlists: FC = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `${spotify}v1/playlists/${pid}` : ''
    const { setTracks } = useContext(UserTrackContext)

    const { tracks } = GetData<GetPlaylistId>(url)
    const newTracks = tracks?.items?.map((track) => {
        return {
            id: track.track.id,
        }
    })

    const handlePlayId = (id: number) => {
        setTracks({ tracks: newTracks, position: id })
    }
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
