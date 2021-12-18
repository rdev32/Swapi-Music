import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { colors } from '../../styles/colors'
interface SvgDynamicProps {
    active: boolean | undefined
    width?: string
}

const SvgBox = styled.div<SvgDynamicProps>`
    display: flex;
    align-items: center;
    width: ${({ width }) => width || 'auto'};
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
    width?: string
}
const AtomIcon = ({ children, name, active, width }: IconProps) => {
    const DynamicIcon = useMemo(
        () => dynamic(() => import(`../../../public/icons/NavBar/${name}.svg`)),
        [name]
    )
    if (!DynamicIcon) return null
    return (
        <SvgBox active={active} width={width}>
            <DynamicIcon />
            {children}
        </SvgBox>
    )
}

export default AtomIcon
