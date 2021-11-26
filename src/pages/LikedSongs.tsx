import { NextPage } from 'next'
import Songs from '../components/Spotify/LikedSong/Songs'
import * as S from '../styles/pages/Home.style'

const LikedSongs: NextPage = () => {
    return (
        <S.HomeContainer>
            <h1>Liked Songs</h1>
            <Songs />
        </S.HomeContainer>
    )
}

export default LikedSongs
