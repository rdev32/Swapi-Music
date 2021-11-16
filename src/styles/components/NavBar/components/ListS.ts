import Link from 'next/link';
import styled from '@emotion/styled';

export const ItemList = styled.a`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  p {
    margin: 1em;
    /* font-size: 14px; */
  }
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
