import styled from '@emotion/styled'
import { FC, useContext } from 'react'
import GetData from '../../hooks/GetData/GetData'
import GetTrack from '../../hooks/types/GetTrack'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import * as SSong from '../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../Spotify/UserImage/UserImage'

const NavBar = styled.nav`
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    display: flex;
    z-index: 1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: 20px;
`

const NavBarPlayer: FC = () => {
    const { idTrack } = useContext(UserTrackContext)
    const url = idTrack ? `https://api.spotify.com/v1/tracks/${idTrack}` : ''
    const track = GetData<GetTrack>(url)

    return (
        <>
            {Object.keys(track).length !== 0 && (
                <NavBar>
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
                    <audio src={track.preview_url} controls></audio>
                </NavBar>
            )}
        </>
    )
}

export default NavBarPlayer
