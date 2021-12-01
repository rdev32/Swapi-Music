import styled from '@emotion/styled'
import { colors } from '../../colors'

export const SearchSection1 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const SearchTitleCategory = styled.h3`
    font-size: 1.5rem;
`

export const SearchArtistMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const SearchProfileContainer = styled.div`
    width: 345px;
    height: 425px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    margin: 0 20px 0 0;
    &:hover {
        background-color: ${colors.gray};
    }
`

export const SearchTracksContainer = styled.div`
    height: 395px;
    /* margin: 0 0 0 20px; */
    width: 70%;
    overflow: hidden;
`
export const SearchImageContainer = styled.div`
    /* background: linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0) 100%); */
`

export const SearchArtist = styled.h1`
    /* position: fixed; */
    margin: 0;
`
export const SearchType = styled.h4`
    /* position: fixed; */
    font-size: 14px;
    margin: 10px 0;
`
