import styled from "@emotion/styled";
import { colors } from "../../colors";

export const ArtistCard = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  z-index: 1;
  &:hover {
    z-index: 1;

    transition: 0.3s;
    background-color: ${colors.gray};
  }
`;
export const ArtistName = styled.h5`
  margin: 10px 0;
  padding: 0;
  font-weight: 600;
  font-size: 14px;
`;
export const ArtistTag = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 500;
  opacity: 0.75;
  font-size: 14px;
`;
export const ArtistCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }: { height?: string }) => height || "265px"};
  width: 100%;
  overflow: hidden;
`;
export const BoxStyle = styled.div`
  margin: 50px 0;
`;
export const UserFollowingHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 0 0;
`;
