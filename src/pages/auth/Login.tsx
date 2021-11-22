/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import UseAuth from '../../hooks/useAuth';
import * as S from '../../styles/pages/auth/login.style';
import WithLogged from './WithLogged';
import { useRouter } from 'next/router';
import UserInit from '../../assets/user.json';
import FormLogin from '../../components/FormLogin/FormLogin';
interface IProps {}

export interface IData {
  username: string;
  password: string;
}

interface IForm {
  user: IData;
  type: string;
}

const Login: FC<IProps> = (props) => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const baseUrl = 'https://accounts.spotify.com/authorize';
  const redirect = 'http://localhost:3000/Home';
  const Scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-follow-read',
  ];
  const ScopesUrlParams = Scopes.join('%20');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    window.location = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirect}&scope=${ScopesUrlParams}&response_type=token&show_dialog=true`;
  };

  return (
    <S.Login>
      <FormLogin handleSubmit={handleSubmit} />
      <S.LoginBgBox>
        <img src="https://i.imgur.com/GbiIsHM.png" alt="bg" height="100%" />
      </S.LoginBgBox>
    </S.Login>
  );
};

export default Login;
