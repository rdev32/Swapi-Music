import { FC } from 'react'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import { Artist as ArtistCard } from '../../hooks/types/GetTopArtist'
import * as S from '../../styles/components/User/Following.style'
import Link from 'next/link'
interface IProps {
    item: ArtistCard
}

const ArtistCard: FC<IProps> = ({ item }) => {
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
            <S.ArtistCard key={item.id}>
                {item?.images && (
                    <UserImage
                        key={item?.images[0]?.url}
                        url={item?.images[0]?.url}
                        bradius={100}
                        displayName={item.name}
                        size={160}
                        name="artistout"
                    />
                )}

                <S.ArtistName>{item.name}</S.ArtistName>
                <S.ArtistTag>Artist</S.ArtistTag>
            </S.ArtistCard>
        </Link>
    )
}

export default ArtistCard
