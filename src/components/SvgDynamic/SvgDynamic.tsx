import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { FC, ComponentType, SVGProps } from 'react'
import { colors } from '../../styles/colors'

interface SvgDynamicProps {
    active: boolean
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
    active: boolean
    color?: 'primary' | 'secondary' | 'white' | 'gray'
}

const AtomIcon: FC<IconProps> = ({ children, name, color, active }) => {
    const DynamicIcon: ComponentType<SVGProps<SVGSVGElement>> | undefined =
        dynamic(() => import(`../../../public/icons/NavBar/${name}.svg`))

    if (DynamicIcon) {
        return (
            <SvgBox color={color} active={active}>
                <DynamicIcon />
                {children}
            </SvgBox>
        )
    }

    return null
}

export default AtomIcon
