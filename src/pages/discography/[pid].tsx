import { useRouter } from 'next/router'
import * as S from '../../styles/pages/User/UserHeader.style'
import { NextPage } from 'next'
import { Artist } from '../../hooks/types/GetAlbum'
import GetData from '../../hooks/GetData/GetData'
import { AlbumArtist } from '../../hooks/types/GetArtistAlbum'
import Albums from '../../components/discography/albums'
import validPid from '../../helpers/pages/artist/ValidPid'

const Discography: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    const urlArtist = `https://api.spotify.com/v1/artists/${pid}`
    const urlAlbums = `https://api.spotify.com/v1/artists/${pid}/albums`

    const { name } = GetData<Artist>(validPid(urlArtist, pid))
    const { items } = GetData<AlbumArtist>(validPid(urlAlbums, pid))

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
