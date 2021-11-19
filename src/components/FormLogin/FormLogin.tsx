import { FC } from 'react';
import { IData } from '../../pages/auth/Login';
import * as S from '../../styles/pages/auth/login.style';

interface IProps {
  props: {
    mount: boolean;
    handleMount: () => void;
    handleSubmit: (event: { preventDefault: () => void }) => void;
    handleUserChange: (event: {
      target: {
        name: string;
        value: string;
      };
    }) => void;
    dataUser: IData;
    message: string;
  };
}

const FormLogin: FC<IProps> = ({
  props: {
    mount,
    handleMount,
    handleSubmit,
    handleUserChange,
    dataUser,
    message,
  },
}) => {
  return (
    <S.LoginFormBox>
      <S.LoginBox>
        <S.LoginTitle>
          Welcome to <span>Swagger Music!</span>
        </S.LoginTitle>
        <p>
          {!mount ? 'Don´t have account' : 'Already have account?'}

          <span>
            <S.LoginChangeMethod onClick={handleMount} type="button">
              {!mount ? 'Sign' : 'Login'}
            </S.LoginChangeMethod>
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
          <S.LoginSubmit type="submit">
            {' '}
            {!mount ? 'Login' : 'Sign'}
          </S.LoginSubmit>
        </S.LoginForm>
        <p>Powered by Whil</p>
      </S.LoginBox>
    </S.LoginFormBox>
  );
};

export default FormLogin;
