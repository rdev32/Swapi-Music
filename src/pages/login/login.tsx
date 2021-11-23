/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import {
  baseUrl,
  clientId,
  redirect,
  ScopesUrlParams,
} from '../../assets/swagger';
import * as S from '../../styles/pages/auth/login.style';

const Login: FC = () => {
  return (
    <S.LoginBody>
      <S.LoginBox>
        <S.LoginTitle>
          Welcome to <span>Swagger Music!</span>
        </S.LoginTitle>
        <S.LoginLink
          href={`${baseUrl}?client_id=${clientId}&redirect_uri=${redirect}&scope=${ScopesUrlParams}&response_type=token&show_dialog=true`}
        >
          Login
        </S.LoginLink>
        <p>Powered by Whil</p>
      </S.LoginBox>
      <S.LoginBgBox>
        <img src="https://i.imgur.com/GbiIsHM.png" alt="bg" height="100%" />
      </S.LoginBgBox>
    </S.LoginBody>
  );
};

export default Login;
