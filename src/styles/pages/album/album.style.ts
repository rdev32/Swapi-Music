import styled from "@emotion/styled";

export const AlbumStyle = styled.main`
  margin: 65px 50px 110px 270px;
`;
export const AlbumHeader = styled.header`
  display: flex;
  align-items:center;
  justify-content: start;
  margin: 0 0 25px 0;
`;
export const AlbumAside = styled.aside`
  /* margin: 0 0 110px 0; */
  margin: ${({ margin }: { margin?: string }) => margin || "auto"};
`;
export const AlbumContent = styled.div`
  margin: 0 0 0 20px;
`;

export const albumLabel = styled.p`
  font-size: 0.85rem;
`;
export const albumTitle = styled.h1`
  overflow:hidden;
  height:40px;

`