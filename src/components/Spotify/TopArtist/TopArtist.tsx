/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { domain } from '../../../assets/spotify'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import GetData from '../../../hooks/GetData/GetData'
import { Artist, Artists } from '../../../hooks/types/GetTopArtist'
import * as S from '../../../styles/components/Spotify/Following/Following.style'

const TopArtist: FC = () => {
    const { items } = GetData<Artists>(
        `${domain}/top/artists?limit=10&offset=0`
    )

    return (
        <S.BoxStyle>
            <h2>Top artists this month</h2>
            <S.ArtistCards>
                {items?.map((item: Artist) => (
                    <S.ArtistCard key={item.id}>
                        <UserImage
                            key={item.images[0].url}
                            url={item.images[0].url}
                            bradius={100}
                            displayName={item.name}
                            size={160}
                        />
                        <S.ArtistName>{item.name}</S.ArtistName>
                        <S.ArtistTag>Artist</S.ArtistTag>
                    </S.ArtistCard>
                ))}
            </S.ArtistCards>
        </S.BoxStyle>
    )
}

export default TopArtist
