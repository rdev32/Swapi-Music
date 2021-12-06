import { NextPage } from 'next'
import UserHeader from '../../components/User/UserHeader'
import UserFollowing from '../../components/User/UserFollowing'
import UserTopSongs from '../../components/User/UserTopSongs'
import UserArtists from '../../components/User/UserTopArtists'
import * as S from '../../styles/general/styles'

const user: NextPage = () => {
    return (
        <S.StyledContainer>
            <UserHeader />
            <UserArtists />
            <UserTopSongs />
            <UserFollowing />
        </S.StyledContainer>
    )
}

export default user
