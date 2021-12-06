import { FC } from 'react'
import { domain } from '../../assets/spotify'
import GetData from '../../hooks/GetData/GetData'
import { Artist, Artists } from '../../hooks/types/GetTopArtist'
import * as S from '../../styles/components/User/Following.style'
import ArtistCard from '../Artist/Artist'

const UserArtists: FC = () => {
    const { items } = GetData<Artists>(
        `${domain}/top/artists?limit=10&offset=0`
    )

    return (
        { items } && (
            <S.BoxStyle>
                <h2>Top artists this month</h2>
                <S.ArtistCards>
                    {items?.map((item: Artist) => (
                        <ArtistCard item={item} key={item.id} />
                    ))}
                </S.ArtistCards>
            </S.BoxStyle>
        )
    )
}

export default UserArtists
