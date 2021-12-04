import { FC } from 'react'
import { domain } from '../../../assets/spotify'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import GetData from '../../../hooks/GetData/GetData'
import { IFollowedArtist } from '../../../hooks/types/GetFollowedArts'
import * as S from '../../../styles/components/Spotify/Following/Following.style'

import ArtistCard from '../../Artist/Artist'
interface IProps {}

const Following: FC<IProps> = () => {
    const { artists } = GetData<IFollowedArtist>(
        `${domain}/following?type=artist&limit=10`
    )
    return (
        <S.BoxStyle>
            <h2>Following</h2>
            <S.ArtistCards>
                {artists?.items.map((artist) => (
                    <ArtistCard key={artist.id} item={artist} />
                ))}
            </S.ArtistCards>
        </S.BoxStyle>
    )
}

export default Following
