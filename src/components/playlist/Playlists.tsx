import { FC, useContext } from 'react'
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

const Playlists: FC = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/playlists/${pid}` : ''
    const { setIdTrack } = useContext(UserTrackContext)

    const { tracks } = GetData<GetPlaylistId>(url)
    return (
        <div>
            {tracks?.items?.map((track: LikedSongs, index: number) => (
                <S.SongCard key={track.track.id}>
                    <div style={{ width: '1%' }}>
                        <p>{index + 1}</p>
                    </div>
                    <button onClick={() => setIdTrack(track.track.id)}>
                        Play
                    </button>
                    <Song key={track.track.id} song={track} />
                </S.SongCard>
            ))}
        </div>
    )
}

export default Playlists
