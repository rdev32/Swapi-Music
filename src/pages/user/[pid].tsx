import { NextPage } from 'next'
import { domain } from '../../assets/spotify'
import Following from '../../components/Spotify/Following/Following'
import MainSongs from '../../components/Spotify/MainSongs/MainSongs'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks//GetData/GetData'
import { IDataUser } from '../../hooks/types/GetUserProfile'
import * as S from '../../styles/pages/profile/profile.style'

const User: NextPage = () => {
    const data = GetData<IDataUser>(domain)
    return (
        <S.UserBody>
            <S.UserStyle>
                <div>
                    {data?.images?.map((img) => (
                        <UserImage
                            key={img.url}
                            url={img.url}
                            bradius={50}
                            displayName={data.display_name}
                        />
                    ))}
                </div>
                <div>
                    <p>Profile</p>
                    <h1>{data?.display_name}</h1>
                    <p>{data?.followers?.total} Followers</p>
                </div>
            </S.UserStyle>
            <MainSongs />
            <Following />
        </S.UserBody>
    )
}

export default User
