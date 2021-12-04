import styled from '@emotion/styled'
import { colors } from '../../../colors'

export const ArtistCard = styled.div`
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        background-color: ${colors.gray};
    }
`
export const ArtistName = styled.h5`
    margin: 10px 0;
    padding: 0;
`
export const ArtistTag = styled.p`
    margin: 0;
    padding: 0;
    font-size: 13px;
`
export const ArtistCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: ${({ height }: { height?: string }) => height || '265px'};
    width: 100%;
    overflow: hidden;
`
export const BoxStyle = styled.div`
    margin: 50px 0;
`
