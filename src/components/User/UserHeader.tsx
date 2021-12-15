import Link from 'next/link'
import { FC, useContext } from 'react'
import GetData from '../../hooks/GetData/GetData'
import { Artist } from '../../hooks/types/GetTopArtist'
import UserContext from '../../hooks/UserContext/UserContext'
import * as S from '../../styles/pages/User/UserHeader.style'
import UserImage from '../Spotify/UserImage/UserImage'

const UserHeader: FC = () => {
    const { user } = useContext(UserContext)
    const { artists } = GetData<{
        artists: { items: Artist[]; total: number }
    }>('https://api.spotify.com/v1/me/following?type=artist&limit=50')

    return (
        { user } && (
            <S.UserHeaderStyle>
                <article>
                    {user?.images?.map((img) => (
                        <UserImage
                            key={img.url}
                            url={img.url}
                            bradius={120}
                            size={220}
                            displayName={user?.display_name}
                        />
                    ))}
                </article>
                <aside>
                    <S.UserProfile>PROFILE</S.UserProfile>
                    <S.UserName>{user?.display_name}</S.UserName>
                    <S.UserFooter>
                        <p>
                            {user?.followers?.total
                                ? `${user?.followers?.total} Followers`
                                : ''}
                        </p>
                        <Link href="/user/following" passHref>
                            <S.UserFooterButton>
                                {artists?.total
                                    ? `${artists?.total} Following`
                                    : ''}
                            </S.UserFooterButton>
                        </Link>
                    </S.UserFooter>
                </aside>
            </S.UserHeaderStyle>
        )
    )
}

export default UserHeader
