import { FC } from 'react'
import { useRouter } from 'next/router'
import GetData from '../../hooks/GetData/GetData'
import { Artist } from '../../hooks/types/GetFollowedArts'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import * as S from '../../styles/pages/profile/profile.style'
import { NextPage } from 'next'

const Artist: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    const url = pid ? `https://api.spotify.com/v1/artists/${pid}` : ''

    const { name, images, followers } = GetData<Artist>(url)

    //Crea una funcion que separe un numero en millares
    const formatNumber = (num: number) => {
        return `${num
            ?.toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Followers`
    }

    // const divideNumbers = (num: string) => {
    //     return num.toLocaleString('en-US')
    // }
    return (
        <S.UserBody>
            <S.UserStyle>
                <div>
                    {images && (
                        <UserImage
                            key={images[0].url}
                            url={images[0].url}
                            bradius={100}
                            displayName={name}
                        />
                    )}
                </div>
                <div>
                    <p>Artist</p>
                    <h1>{name}</h1>
                    <p>{formatNumber(followers?.total)}</p>
                </div>
            </S.UserStyle>
        </S.UserBody>
    )
}

export default Artist
