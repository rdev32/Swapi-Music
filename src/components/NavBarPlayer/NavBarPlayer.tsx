import styled from '@emotion/styled'
import { FC, useContext } from 'react'
import GetData from '../../hooks/GetData/GetData'
import GetTrack from '../../hooks/types/GetTrack'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import { NavPlayer } from '../../styles/components/NavBarPlayer/NavBarPlayer.style'
import * as SSong from '../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../Spotify/UserImage/UserImage'

const NavBarPlayer: FC = () => {
    const { idTrack } = useContext(UserTrackContext)
    const url = idTrack ? `https://api.spotify.com/v1/tracks/${idTrack}` : ''
    const track = GetData<GetTrack>(url)

    return (
        <>
            {Object.keys(track).length !== 0 && (
                <NavPlayer>
                    <SSong.SongMain>
                        <UserImage
                            url={track?.album?.images[0].url}
                            displayName={track.album.name}
                            size={60}
                            bradius={10}
                        />
                        <SSong.SongDescription>
                            <SSong.SontTitle>{track?.name}</SSong.SontTitle>
                            <SSong.SongArtist>
                                {track.artists
                                    .map((name) => `${name.name}`)
                                    .join(', ')}
                            </SSong.SongArtist>
                        </SSong.SongDescription>
                    </SSong.SongMain>
                    <audio src={track.preview_url} controls autoPlay></audio>
                </NavPlayer>
            )}
        </>
    )
}

export default NavBarPlayer
