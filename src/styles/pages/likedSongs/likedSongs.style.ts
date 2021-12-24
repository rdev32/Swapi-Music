import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../colors";

export const NavBarLikedSongs = styled.nav`
  display: none;
  width: 100%;
  height: 80px;
  transition: 0.3s;

  h1 {
    margin: 0 0 0 290px;
  }
  ${({ scroll }: { scroll: number }) =>
    scroll >= 50 &&
    css`
      transition: 0.3s;
      background-color: ${colors.blue};
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 1;
      color: white;
      border-radius: 0 0 10px 0;
    `}
`;
