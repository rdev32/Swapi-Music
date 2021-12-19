import styled from "@emotion/styled";
import { colors } from "../../../../colors";
import { fontWeight } from "../../../../fonts";

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  h1 {
  }
`;

export const ItemT = styled.div`
  h1 {
    font-size: 22px;
    color: ${colors.blue};
    font-weight: ${fontWeight.semiBold};
  }
`;
