import styled from '@emotion/styled'
import { colors } from '../../../colors'

export const ArtistCard = styled.div`
    background-color: ${colors.gray};
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    justify-content: space-around;
    flex-wrap: wrap;
    height: 265px;
    width: 100%;
    overflow: hidden;
`
export const BoxStyle = styled.div`
    margin: 50px 0;
`
