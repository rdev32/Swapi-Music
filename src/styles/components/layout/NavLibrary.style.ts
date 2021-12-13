import styled from '@emotion/styled'
import { colors } from '../../colors'

export const NavLibrary = styled.nav`
    margin: 65px 0 0 270px;
    display: flex;
    align-items: center;
`
export const NavLibraryItem = styled.a`
    margin: 5px;
    cursor: pointer;
    font-weight: 500;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    color: ${({ active }: { active: boolean }) =>
        active ? 'white' : colors.black};
    background-color: ${({ active }: { active: boolean }) =>
        active ? colors.blue : 'transparent'};
`
