import { FC } from 'react'
import { domain } from '../assets/spotify'
import Following from '../components/Spotify/Following/Following'
import TopSongs from '../components/Spotify/MainSongs/MainSongs'
import TopArtist from '../components/Spotify/TopArtist/TopArtist'
import UserImage from '../components/Spotify/UserImage/UserImage'
import * as S from '../styles/pages/profile/profile.style'
import GetData from '../hooks/GetData/GetData'
import { IDataUser } from '../hooks/types/GetUserProfile'

const Profile: FC = () => {
    const data = GetData<IDataUser>(domain)
    return (
        <S.UserBody>
            <S.UserStyle>
                <div>
                    {data?.images?.map((img) => (
                        <UserImage
                            key={img.url}
                            url={img.url}
                            bradius={100}
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
            <TopArtist />
            <TopSongs />
            <Following />
        </S.UserBody>
    )
}

export default Profile
