import styled from '@emotion/styled';
import { colors } from '../../colors';
import { fontWeight } from '../../fonts';

export const Login = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

export const LoginBgBox = styled.div`
  display: inline-block;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LoginFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoginForm = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const LoginBox = styled.div`
  width: 334px;
  /* height: 29px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
`;
export const LoginSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 9px 97px;
  width: 275px;
  height: 40px;
  background: ${colors.blue};
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: ${fontWeight.semiBold};
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    outline: 1px solid ${colors.blue};
    outline-offset: -2px;
    color: ${colors.blue};
    background-color: transparent;
  }
`;
export const LoginTitle = styled.h1`
  font-size: 24px;
`;
