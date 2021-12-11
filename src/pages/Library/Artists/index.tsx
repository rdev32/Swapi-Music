import { FC } from 'react'
import * as S from '../../../styles/general/styles'
import * as SFollowing from '../../../styles/components/User/Following.style'
import GetData from '../../../hooks/GetData/GetData'
import { Artist } from '../../../hooks/types/GetTopArtist'
import ArtistCard from '../../../components/Artist/Artist'

interface IProps {}

const Artists: FC<IProps> = (props) => {
    const { artists } = GetData<{
        artists: { items: Artist[]; total: number }
    }>('https://api.spotify.com/v1/me/following?type=artist&limit=50')
    console.log(artists)

    return (
        <S.StyledLibraryContainer>
            <h1>Artists</h1>
            <SFollowing.ArtistCards height="auto">
                {artists?.items?.map((artist) => (
                    <ArtistCard item={artist} key={artist.id} />
                ))}
            </SFollowing.ArtistCards>
        </S.StyledLibraryContainer>
    )
}

export default Artists
