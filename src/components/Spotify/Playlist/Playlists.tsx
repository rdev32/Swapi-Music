import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import PlayList from '../../../components/Spotify/Playlist/PlayList'
import GetData from '../../../hooks/GetData/GetData'
import { GetPlayList } from '../../../hooks/types/GetPlayList'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../../styles/pages/library/library.style'

const Playlists: FC = () => {
    const url = 'https://api.spotify.com/v1/me/playlists'
    const { items } = GetData<GetPlayList>(url)
    const { setActive } = useContext(useActiveOptContext)
    const router = useRouter()
    const handleSetActive = () => {
        router.push('/LikedSongs')
        setActive('LikedSongs')
    }
    return (
        <S.Playlists>
            <S.LikedSongsWrapper onClick={handleSetActive}>
                Liked Songs
            </S.LikedSongsWrapper>
            {items?.map((playlist) => (
                <PlayList key={playlist.id} playlist={playlist} />
            ))}
        </S.Playlists>
    )
}

export default Playlists
