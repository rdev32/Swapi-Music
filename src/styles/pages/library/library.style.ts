import styled from '@emotion/styled'
import { colors } from '../../colors'

export const LibraryStyleWrapper = styled.div`
    margin: 65px 0 0 250px;
    font-family: Inter;
`

export const Playlists = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const PlaylistCard = styled.button`
    margin: 10px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.3s;
    cursor: pointer;
    font-family: Inter;

    &:hover {
        padding: 10px;
        transition: 0.3s;
        background-color: ${colors.gray};
    }
`

export const PlaylistTitle = styled.h4`
    margin: 10px 0;
`

export const PlaylistAuthor = styled.p`
    margin: 0;
`
export const LikedSongsWrapper = styled.button`
    background-color: ${colors.blue};
    border: none;
    width: 290px;
    height: 220px;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    color: white;
    font-weight: bold;
    font-size: 24px;
    padding: 20px;
    cursor: pointer;
    margin: 10px;
`
