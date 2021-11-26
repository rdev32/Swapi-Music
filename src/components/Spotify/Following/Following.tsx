import { FC } from 'react'
import { domain } from '../../../assets/spotify'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import GetData from '../../../hooks/GetData/GetData'
import { IFollowedArtist } from '../../../hooks/types/GetFollowedArts'
import * as S from '../../../styles/components/Spotify/Following/Following.style'
interface IProps {}

const Following: FC<IProps> = () => {
    const { artists } = GetData<IFollowedArtist>(
        `${domain}/following?type=artist&limit=10`
    )
    return (
        <div>
            <h2>Following</h2>
            <S.ArtistCards>
                {artists?.items.map((artist) => (
                    <S.ArtistCard key={artist.id}>
                        <UserImage
                            key={artist.images[0].url}
                            url={artist.images[0].url}
                            bradius={100}
                            displayName={artist.name}
                            size={160}
                        />
                        <S.ArtistName>{artist.name}</S.ArtistName>
                        <S.ArtistTag>Artist</S.ArtistTag>
                    </S.ArtistCard>
                ))}
            </S.ArtistCards>
        </div>
    )
}

export default Following
