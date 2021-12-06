import { useRouter } from 'next/router'
import * as S from '../../styles/pages/User/UserHeader.style'
import { NextPage } from 'next'
import { Artist } from '../../hooks/types/GetAlbum'
import GetData from '../../hooks/GetData/GetData'
import { AlbumArtist } from '../../hooks/types/GetArtistAlbum'
import Albums from '../../components/discography/albums'

const Discography: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    const urlArtist = pid ? `https://api.spotify.com/v1/artists/${pid}` : ''
    const urlAlbums = pid
        ? `https://api.spotify.com/v1/artists/${pid}/albums`
        : ''

    const { name } = GetData<Artist>(urlArtist)
    const { items } = GetData<AlbumArtist>(urlAlbums)

    return (
        <S.UserBody>
            <h1> {name}</h1>
            {items?.map((item) => (
                <Albums key={item.id} album={item} />
            ))}
        </S.UserBody>
    )
}

export default Discography
