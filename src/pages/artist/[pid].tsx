import { NextPage } from 'next'
import { useRouter } from 'next/router'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks/GetData/GetData'
import { Artist } from '../../hooks/types/GetFollowedArts'
import * as S from '../../styles/pages/User/UserHeader.style'

const Artist: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    const url = pid ? `https://api.spotify.com/v1/artists/${pid}` : ''

    const { name, images, followers } = GetData<Artist>(url)

    const formatNumber = (numbers: number) => {
        return `${numbers
            ?.toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Followers`
    }
    return (
        <S.UserBody>
            <S.UserHeaderStyle width="370px">
                <div>
                    {images && (
                        <UserImage
                            key={images[0].url}
                            url={images[0].url}
                            bradius={100}
                            displayName={name}
                            size={200}
                        />
                    )}
                </div>
                <div>
                    <p>Artist</p>
                    <h1>{name}</h1>
                    <p>{formatNumber(followers?.total)}</p>
                </div>
            </S.UserHeaderStyle>
        </S.UserBody>
    )
}

export default Artist
