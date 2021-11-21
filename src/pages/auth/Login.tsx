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
  const [dataUser, setDataUser] = useState<IData>(UserInit as IData);
  const [mount, setMount] = useState<boolean>(false);
  const [form, setForm] = useState<IForm>({} as IForm);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const baseUrl = 'https://accounts.spotify.com/authorize';
  const redirect = 'http://localhost:3000/Home';
  const Scopes = ['user-read-currently-playing', 'user-read-playback-state'];
  const ScopesUrlParams = Scopes.join('%20');

  const handleUserChange = (event: {
    target: { name: string; value: string };
  }) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event?.target.value,
    });
  };

  const handleMount = () => {
    setMount(!mount);
    setForm({ type: '', user: UserInit });
    setDataUser(UserInit);
    setMessage('');
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (mount && dataUser.username && dataUser.password) {
      setForm({ type: 'sign', user: dataUser });
      setMessage('');
    } else if (!mount && dataUser.username && dataUser.password) {
      setForm({ type: 'login', user: dataUser });
    } else {
      setMessage('Fill in the fields');
    }
  };

  const userAuth = UseAuth(form);

  useEffect(() => {
    if (Object.keys(userAuth).length !== 0) {
      userAuth && localStorage.setItem('@!user', JSON.stringify(userAuth));
      userAuth.message && setMessage(userAuth.message);
      userAuth.authentication &&
        setTimeout(() => {
          window.location = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirect}&scope=${ScopesUrlParams}&response_type=token&show_dialog=true`;
        }, 500);
    }
  }, [userAuth]);
  return (
    <S.Login>
      <FormLogin
        props={{
          mount,
          handleMount,
          handleSubmit,
          handleUserChange,
          dataUser,
          message,
        }}
      />
      <S.LoginBgBox>
        <img src="https://i.imgur.com/GbiIsHM.png" alt="bg" height="100%" />
      </S.LoginBgBox>
    </S.Login>
  );
};

export default Login;
