import styled from '@emotion/styled'
import { colors } from '../../../../../colors'

export const Song = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px 0;
    &:hover {
        border-radius: 10px;
        background-color: ${colors.gray};
    }
`

export const SongMain = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const SongTitleAlbum = styled.div`
    width: 100%;
    a {
        font-weight: 500;
        opacity: 0.5;
    }
    a:hover {
        text-decoration: underline;
    }
`
export const SontTitle = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin: 0;
`
export const SongArtist = styled.a`
    margin: 0;

    opacity: 0.75;
    font-weight: 500;
    padding: 0;
    &:hover {
        text-decoration: underline;
    }
`

export const SongDescription = styled.div`
    margin: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const SongMinutesBox = styled.div`
    width: 100px;
    p {
        font-weight: 500;
        opacity: 0.5;
    }
`
export const SongButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SongPlayerIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SongPlayerVolumen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    margin: 0 50px 0 0;
`
export const SongNumberItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    p:hover {
        margin: 20px;
        display: none;
    }
`
export const SongArtists = styled.div`
    overflow: hidden;
    height: 20px;
    width: 250px;
`
