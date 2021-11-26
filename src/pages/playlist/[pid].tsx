import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Header from '../../components/playlist/components/header'
import GetData from '../../hooks/GetData/GetData'
import { GetPlaylistId } from '../../hooks/types/GetPlayListId'
import * as S from '../../styles/pages/playlist/playlist.style'

const Playlist: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/playlists/${pid}` : ''

    const { tracks, name, images, owner } = GetData<GetPlaylistId>(url)

    return (
        <S.PlaylistStyleWrapper>
            <Header images={images} name={name} owner={owner} tracks={tracks} />
        </S.PlaylistStyleWrapper>
    )
}

export default Playlist
