import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { ReactChild, useMemo } from 'react'
import { colors } from '../../styles/colors'
interface SvgDynamicProps {
    active: boolean | undefined
}

const SvgBox = styled.div<SvgDynamicProps>`
    display: flex;
    align-items: center;
    svg {
        path {
            fill: ${({ active }) => (active ? colors.blue : 'black')};
        }
    }
    &:hover {
        svg {
            path {
                fill: ${colors.blue};
            }
        }
    }
`

export type IconProps = {
    name: string
    active?: boolean
    children?: any
}
const AtomIcon = ({ children, name, active }: IconProps) => {
    const DynamicIcon = useMemo(
        () => dynamic(() => import(`../../../public/icons/NavBar/${name}.svg`)),
        [name]
    )
    if (!DynamicIcon) return null
    return (
        <SvgBox active={active}>
            <DynamicIcon />
            {children}
        </SvgBox>
    )
}

export default AtomIcon
