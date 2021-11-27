import { FC } from 'react'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import { Artist as ArtistCard } from '../../hooks/types/GetTopArtist'
import * as S from '../../styles/components/Spotify/Following/Following.style'

interface IProps {
    item: ArtistCard
}

const ArtistCard: FC<IProps> = ({ item }) => {
    return (
        <S.ArtistCard key={item.id}>
            {item.images.length > 0 && (
                <UserImage
                    key={item.images[0].url}
                    url={item.images[0].url}
                    bradius={100}
                    displayName={item.name}
                    size={160}
                />
            )}

            <S.ArtistName>{item.name}</S.ArtistName>
            <S.ArtistTag>Artist</S.ArtistTag>
        </S.ArtistCard>
    )
}

export default ArtistCard
