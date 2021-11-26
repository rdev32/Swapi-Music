import { NextPage } from 'next'
import Head from '../components/Profile/Head'
import Following from '../components/Spotify/Following/Following'
import TopSongs from '../components/Spotify/MainSongs/MainSongs'
import TopArtist from '../components/Spotify/TopArtist/TopArtist'
import * as S from '../styles/pages/profile/profile.style'

const Profile: NextPage = () => {
    return (
        <S.UserBody>
            <Head />
            <TopArtist />
            <TopSongs />
            <Following />
        </S.UserBody>
    )
}

export default Profile
