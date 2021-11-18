/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import UseAuth from '../../hooks/useActiveOptContext/useAuth';
import * as S from '../../styles/pages/auth/login.style';
import WithLogged from './WithLogged';
import { useRouter } from 'next/router';

interface IProps {}

interface IForm {
  username: string;
  password: string;
}

interface IData {}

const Login: FC<IProps> = (props) => {
  const [dataUser, setDataUser] = useState<IForm>({
    username: '',
    password: '',
  } as IForm);
  const [form, setForm] = useState<IForm>({} as IForm);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();
  const handleUserChange = (event: {
    target: { name: string; value: string };
  }) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event?.target.value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (dataUser.username && dataUser.password) {
      setForm(dataUser);
    }
  };
  const userAuth = UseAuth({ user: form, type: 'login' });

  useEffect(() => {
    // const { authentication, token, message } = userAuth;
    if (Object.keys(userAuth).length !== 0) {
      userAuth.authentication &&
        setTimeout(() => {
          router.replace('/Home');
        }, 500);
      userAuth && localStorage.setItem('@!user', JSON.stringify(userAuth));
      message && setMessage(message);
    }
  }, [userAuth]);

  console.log(userAuth);
  return (
    <S.Login>
      <S.LoginFormBox>
        <S.LoginBox>
          <S.LoginTitle>Welcome to Swagger Music!</S.LoginTitle>
          <p>
            Already have account?
            <span>
              <button type="button">Sign In</button>
            </span>
          </p>
          <S.LoginForm onSubmit={handleSubmit}>
            <div
              style={{
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <S.LoginInput
                onChange={handleUserChange}
                name="username"
                type="text"
                placeholder="Username"
                value={dataUser.username}
              />
              <S.LoginInput
                onChange={handleUserChange}
                value={dataUser.password}
                name="password"
                type="text"
                placeholder="Password"
              />
            </div>
            {message && <p>{message}</p>}
            <S.LoginSubmit type="submit">Sign Up</S.LoginSubmit>
          </S.LoginForm>
          <p>Forgot Password?</p>
        </S.LoginBox>
      </S.LoginFormBox>
      <S.LoginBgBox>
        <img src="https://i.imgur.com/GbiIsHM.png" alt="bg" height="100%" />
      </S.LoginBgBox>
    </S.Login>
  );
};

export default WithLogged(Login);
