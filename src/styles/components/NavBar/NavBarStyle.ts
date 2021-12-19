import styled from "@emotion/styled";
import { colors } from "../../colors";

export const NavBar = styled.nav`
  width: 230px;
  height: 100vh;
  background: ${colors.gray};
  border-radius: 0px 20px 20px 0px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  z-index: 2;
`;
