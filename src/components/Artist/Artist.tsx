import Link from 'next/link'
import { FC, useContext } from 'react'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import { Artist as ArtistCard } from '../../hooks/types/GetTopArtist'
import UserContext from '../../hooks/UserContext/UserContext'
import * as S from '../../styles/components/User/Following.style'
interface IProps {
    item: ArtistCard
}

type Payload = {
    id: string
    tag: string
    type: string
    image: string
    url: string
}

const ArtistCard: FC<IProps> = ({ item }) => {
    const firstLetter = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

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
            id: item.id,
            tag: item.name,
            type: 'artist',
            image: item.images[0].url,
            url: `/artist/${item.id}`,
        }
    }

    return (
        <Link
            href={{
                pathname: '/artist/[pid]',
                query: {
                    pid: item.id,
                },
            }}
            passHref
        >
            <S.ArtistCard
                key={item.id}
                onClick={() => handleMiddleClick(payload())}
            >
                {item?.images && (
                    <UserImage
                        key={item?.images[0]?.url}
                        url={item?.images[0]?.url}
                        bradius={100}
                        displayName={item.name}
                        size={180}
                        name="artistout"
                    />
                )}

                <S.ArtistName>{item.name}</S.ArtistName>
                <S.ArtistTag>{firstLetter(item.type)}</S.ArtistTag>
            </S.ArtistCard>
        </Link>
    )
}

export default ArtistCard
