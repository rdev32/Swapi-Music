import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../../styles/pages/library/library.style'
import { GetPlayList, IPlaylist } from '../../../hooks/types/GetPlayList'
import PlayList from './PlayList'

interface IPlayList {
    items: GetPlayList['items']
}
const Playlists: FC<IPlayList> = ({ items }) => {
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
            {items?.map((playlist: IPlaylist) => (
                <PlayList key={playlist.id} playlist={playlist} />
            ))}
        </S.Playlists>
    )
}

export default Playlists
