import { FC } from 'react'
import { useRouter } from 'next/router'
import {
    GetPlaylistId,
    GetTrackPlaylistId,
} from '../../hooks/types/GetPlayListId'
import GetData from '../../hooks/GetData/GetData'
import * as S from '../../styles/components/Spotify/MainSongs/Main.style'
import Song from '../../components/playlist/components/Songs/Song'

const Playlists: FC = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/playlists/${pid}` : ''

    const { tracks } = GetData<GetPlaylistId>(url)
    return (
        <div>
            {tracks?.items?.map(
                ({ track }: GetTrackPlaylistId, index: number) => (
                    <S.SongCard key={track.id}>
                        <div style={{ width: '1%' }}>
                            <p>{index + 1}</p>
                        </div>

                        <Song key={track.id} track={track} />
                    </S.SongCard>
                )
            )}
        </div>
    )
}

export default Playlists
