import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { IPlaylist } from '../../../hooks/types/GetPlayList'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import UserContext from '../../../hooks/UserContext/UserContext'
import * as S from '../../../styles/pages/library/library.style'
import UserImage from '../UserImage/UserImage'

interface IProps {
    playlist: IPlaylist
}

type Payload = {
    id: string
    tag: string
    type: string
    image: string
    url: string
}

const PlayList: FC<IProps> = ({ playlist }) => {
    const { setActive } = useContext(useActiveOptContext)
    const router = useRouter()

    const { recent, setRecent } = useContext(UserContext)
    const handleMiddleClick = (payload: Payload) => {
        if (
            recent?.find(
                (item: Payload) =>
                    item.id === payload.id || item.tag === payload.tag
            )
        ) {
            return
        } else if (recent.length < 6) {
            setRecent([payload, ...recent])
        } else {
            setRecent([payload, ...recent.slice(0, 6)])
        }
    }
    const payload = () => {
        return {
            id: playlist.id,
            tag: playlist.name,
            type: 'playlist',
            image: playlist.images.length > 0 ? playlist.images[0].url : '',
            url: `/playlist/${playlist.id}`,
        }
    }

    const handlePlaylist = () => {
        router.push(`/playlist/${playlist.id}`)
        handleMiddleClick(payload())
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
