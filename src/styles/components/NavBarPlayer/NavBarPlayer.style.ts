import styled from '@emotion/styled'
import { colors } from '../../colors'

export const NavPlayer = styled.nav`
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    display: flex;
    z-index: 3;
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
    width: 20px;
    height: 20px;
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
export const NavBarCircle = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    /* background-color: #9b59b6; */
    /* background: ${colors.blue}; */
    border-radius: 50%;
    width: 50%;
    height: 50%;
    height: 0;
    padding-bottom: 50%;
    transform: translate3d(-50%, -50%, 0);
    border: 1px solid ${colors.blue};
    /* box-shadow: 0 0 10px rgba(#000, 0.5); */
    &:before {
        content: '';
        position: absolute;
        width: 90%;
        height: 90%;
        /* background-color: #ecf0f1; */
        border-radius: 50%;
        top: 5%;
        left: 5%;
        box-shadow: inset 0 0 10px rgba(#000, 0.5);
    }
`

export const NavBarPointCircle = styled.div`
    position: absolute;
    width: 5%;
    height: 50%;
    left: 47.5%;
    top: 0;
    transform: ${({ rotate }: { rotate?: number }) =>
        `rotate(${(rotate ? rotate : 0 / 60 / 60)
            .toString()
            .slice(0)}deg)`}; })};
    transform-origin: center bottom;
    &:before {
        content: '';
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 10px #000;
        width: 200%;
        transform: translate3d(-25%, -25%, 0);
        height: 0;
        padding-bottom: 200%;
        border-radius: 50%;
        cursor: pointer;
    }
`
export const NavbarFooterBar = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 23px;
    margin: 0;
    padding: 0;
    input {
        width: 335px;
    }
`
