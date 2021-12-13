import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { IPlaylist } from '../../../hooks/types/GetPlayList'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../../styles/pages/library/library.style'
import UserImage from '../UserImage/UserImage'

interface IProps {
    playlist: IPlaylist
}

const PlayList: FC<IProps> = ({ playlist }) => {
    const { setActive } = useContext(useActiveOptContext)
    const router = useRouter()
    const handlePlaylist = () => {
        router.push(`/playlist/${playlist.id}`)
        setActive('')
    }

    return (
        <S.PlaylistCard onClick={handlePlaylist}>
            {playlist.images.length > 0 ? (
                <UserImage
                    url={playlist.images[0].url}
                    displayName={playlist.name}
                    size={166}
                    bradius={10}
                    name="playlistout"
                />
            ) : (
                <UserImage
                    url=""
                    displayName={playlist.name}
                    size={166}
                    bradius={10}
                    name="playlistout"
                />
            )}
            <S.PlaylistTitle>
                {playlist.name.length > 16
                    ? `${playlist.name.slice(0, 16).trim()}...`
                    : playlist.name.slice(0, 16)}
            </S.PlaylistTitle>
            <S.PlaylistAuthor>{playlist.owner.display_name}</S.PlaylistAuthor>
        </S.PlaylistCard>
    )
}

export default PlayList
