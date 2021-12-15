import styled from '@emotion/styled'
import { colors } from '../../../colors'

export const SongCard = styled.div`
    display: flex;
    align-items: center;
    /* margin: 0 30px 0 0; */
`
export const SongNumber = styled.p`
    font-size: 16px;
    cursor: pointer;
    position: relative;
    margin: 10px;
    &:hover {
        display: none;
    }
`
export const BoxStyle = styled.div`
    margin: 50px 0;
`
export const Button = styled.button`
    background-color: transparent;
    border: none;
    width: 55px;
    height: 55px;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
        display: none;
        path {
            fill: black;
        }
    }
    /* display: none; */
    &:hover {
        background-color: ${colors.gray};
        svg {
            display: flex;
        }
        /* background-color: rgba(0, 0, 0, 0.5); */
    }
`
