import styled from '@emotion/styled'

export const AlbumStyle = styled.main`
    margin: 65px 0 110px 270px;
`
export const AlbumHeader = styled.header`
    display: flex;
    justify-content: start;
    /* align-items: center; */
    margin: 0 0 25px 0;
`
export const AlbumAside = styled.aside`
    /* margin: 0 0 110px 0; */
    margin: ${({ margin }: { margin?: string }) => margin || 'auto'};
`
export const AlbumContent = styled.div`
    margin: 0 0 0 20px;
`
