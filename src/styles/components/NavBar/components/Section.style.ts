import Link from 'next/link'
import styled from '@emotion/styled'
import { fontWeight } from '../../../fonts'
import { css } from '@emotion/react'
import { colors } from '../../../colors'
interface IItemList {
    active: boolean
    margin?: string
}

export const SectionLink = styled.a<IItemList>`
    display: flex;
    align-items: center;
    width: 150px;
    height: 20px;
    margin: ${({ margin }) => margin || '0'};

    &:hover {
        color: ${colors.blue};
    }
    ${({ active }) =>
        active
            ? css`
                  color: ${colors.blue};
                  border-right: 2px solid ${colors.blue};
              `
            : false}
`

type ItemDiv = {
    height?: string
    margin?: string
}
export const SectionTitle = styled.h4`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
`
export const SectionLinks = styled(Link)`
    cursor: pointer;
`

export const Section = styled.div<ItemDiv>`
    padding: 0;
    height: ${({ height }) => height || '160px'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const SectionName = styled.p`
    margin: 10px;
    font-weight: ${fontWeight.medium};
`
