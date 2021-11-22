import { FC } from 'react';
import { IData } from '../../pages/auth/Login';
import * as S from '../../styles/pages/auth/login.style';

interface IProps {
  handleSubmit: (event: { preventDefault: () => void }) => void;
}

const FormLogin: FC<IProps> = ({ handleSubmit }) => {
  return (
    <S.LoginFormBox>
      <S.LoginBox>
        <S.LoginTitle>
          Welcome to <span>Swagger Music!</span>
        </S.LoginTitle>
        <S.LoginForm onSubmit={handleSubmit}>
          <S.LoginSubmit type="submit">Login</S.LoginSubmit>
        </S.LoginForm>
        <p>Powered by Whil</p>
      </S.LoginBox>
    </S.LoginFormBox>
  );
};

export default FormLogin;
