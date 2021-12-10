import styled from '@emotion/styled'
import { colors } from '../../colors'

export const NavPlayer = styled.nav`
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90px;
    display: flex;
    z-index: 1;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PlayerInfoSong = styled.div`
    display: flex;
    position: fixed;
    margin: 0 0 0 50px;
    left: 0;
`
export const RepeatButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    svg {
        path {
            stroke: ${({ repeat }: { repeat: boolean }) =>
                repeat ? colors.blue : colors.black};
        }
    }
`

export const AleatoryButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    svg {
        path {
            fill: ${({ aleatory }: { aleatory: boolean }) =>
                aleatory ? colors.blue : colors.black};
        }
    }
`
