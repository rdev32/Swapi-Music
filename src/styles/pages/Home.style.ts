import styled from '@emotion/styled'

export const Header = styled.header`
    display: flex;
`
export const LikedSongButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 203px;
    height: 68px;
    border: 1px solid #316ad9;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px;
    p {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #316ad9;
        margin: 5px;
    }
    svg {
        width: 48px;
        height: 48px;
    }
    div {
        margin: 10px;
    }
`
export const Card = styled.a`
    display: flex;
    align-items: center;
    width: 202px;
    height: 68px;
    background: #f8f8f8;
    border-radius: 10px;
    margin: 10px;
    p {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin: 5px;
    }
    /* background: red; */
`
export const Cards = styled.header`
    display: flex;
    aside {
        display: flex;
        flex-wrap: wrap;
        width: 890px;
    }
`
