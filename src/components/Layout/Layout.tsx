import styled from '@emotion/styled';
import { FC } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ButtonUser from '../ButtonUser/ButtonUser';

const AppMain = styled.main`
  display: flex;
  width: 100%;
`;
interface IProps {
  router: {
    pathname: string;
  };
}

const Layout: FC<IProps> = ({ children, router }) => {
  const invalidPages = ['/', '/auth/Login'];

  return (
    <AppMain>
      {!invalidPages.includes(router?.pathname) && <NavBar />}
      <main>
        {children}
        {!invalidPages.includes(router?.pathname) && <ButtonUser />}
      </main>
    </AppMain>
  );
};

export default Layout;
