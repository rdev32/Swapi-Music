import Link from 'next/link';
import styled from '@emotion/styled';
import { fontWeight } from '../../../fonts';
import { css } from '@emotion/react';
import { colors } from '../../../colors';
interface IItemList {
  active: boolean;
}

const Options = ['Home', 'Search', 'Library', 'Liked Songs'];

export const ItemList = styled.a<IItemList>`
  display: flex;
  width: 150px;
  ${({ active }) =>
    active &&
    css`
      color: ${colors.blue};
      border-right: 2px solid ${colors.blue};
      line-height: 18.39px;
    `}
`;
export const ItemTitle = styled.h2`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;
export const ItemLink = styled(Link)`
  cursor: pointer;
`;
export const ItemUl = styled.ul`
  padding: 0;
`;
export const ItemPhrase = styled.p`
  margin: 10px;
  font-weight: ${fontWeight.medium};
`;
