import { NextPage } from 'next'
import Songs from '../components/Spotify/LikedSong/Songs'
import * as S from '../styles/general/styles'
import { GetLikedSongs } from '../hooks/types/GetLikedSongs'
import GetData from '../hooks/GetData/GetData'

const LikedSongs: NextPage = () => {
    const url = 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0'
    const { items } = GetData<GetLikedSongs>(url)

    console.log(items)

    return (
        <S.StyledContainer>
            <h1>Liked Songs</h1>
            <Songs data={items} />
        </S.StyledContainer>
    )
}

export default LikedSongs
