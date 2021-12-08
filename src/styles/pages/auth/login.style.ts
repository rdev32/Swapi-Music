import styled from '@emotion/styled'
import { colors } from '../../colors'
import { fontWeight } from '../../fonts'

export const LoginChangeMethod = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: ${colors.blue};
`
export const Login = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
`

export const LoginBgBox = styled.div`
    display: inline-block;
    @media (max-width: 1140px) {
        display: none;
    }
`
export const LoginFormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const LoginBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LoginInput = styled.input`
    display: flex;
    padding: 9px 10px;
    width: 275px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #f5f5f5;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
`

interface Buttons {
    signup: boolean
}
export const Buttons = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 88px;
    background-color: ${colors.green};
    border-radius: 10px;
    outline: none;
    border: none;
    color: white;
    font-weight: ${fontWeight.semiBold};
    transition: 0.3s;
    cursor: pointer;
`
export const LoginTitle = styled.h1`
    font-size: 24px;
    display: flex;
    align-items: center;
    color: ${colors.blue};
`
export const LoginQuestion = styled.h1`
    width: 346px;
    font-size: 48px;
    span {
        color: ${colors.blue};
    }
`
export const LoginBody = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    font-family: Inter;
`
export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 20px;
`
export const NavBarButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    flex-direction: ${({ signup }: { signup: boolean }) =>
        signup ? 'row-reverse' : 'row'};
`
export const NavBarPhrase = styled.p`
    width: 331px;
    font-family: Inter;
    font-size: 18px;
    opacity: 0.5;
`

export const Home = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px 0;
    div {
        margin: 20px;
    }
`
export const Foot = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`
