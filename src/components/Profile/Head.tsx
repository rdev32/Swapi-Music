import { FC } from 'react'
import * as S from '../../styles/pages/profile/profile.style'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import { domain } from '../../assets/spotify'
import { IDataUser } from '../../hooks/types/GetUserProfile'
import GetData from '../../hooks/GetData/GetData'

const Head: FC = () => {
    const { images, display_name, followers } = GetData<IDataUser>(domain)
    return (
        <S.UserStyle>
            <div>
                {images?.map((img) => (
                    <UserImage
                        key={img.url}
                        url={img.url}
                        bradius={100}
                        size={180}
                        displayName={display_name}
                    />
                ))}
            </div>
            <div>
                <p>Profile</p>
                <h1>{display_name}</h1>
                <p>{followers?.total} Followers</p>
            </div>
        </S.UserStyle>
    )
}

export default Head
