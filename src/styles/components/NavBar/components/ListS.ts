import Link from 'next/link'
import styled from '@emotion/styled'
import { fontWeight } from '../../../fonts'
import { css } from '@emotion/react'
import { colors } from '../../../colors'
interface IItemList {
    active: boolean
}

export const ItemList = styled.a<IItemList>`
    display: flex;
    align-items: center;
    width: 150px;
    height: 20px;
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

export const ItemTitle = styled.h2`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
`
export const ItemLink = styled(Link)`
    cursor: pointer;
`
export const ItemDiv = styled.div`
    padding: 0;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const ItemPhrase = styled.p`
    margin: 10px;
    font-weight: ${fontWeight.medium};
`
