import styled from '@emotion/styled'
import { colors } from '../../colors'

export const AlbumsFooterHeader = styled.header`
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    /* margin: 0 30px; */
`
export const AlbumsFooterButton = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export const AlbumRedirect = styled.a`
    margin: 10px;
    width: 186px;
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
