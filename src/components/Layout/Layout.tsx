import styled from '@emotion/styled';
import { FC } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ButtonUser from '../ButtonUser/ButtonUser';

const AppMain = styled.main`
  display: flex;
  justify-content: space-between;
  /*width: 100%; */
`;

const AppBodyBox = styled.div`
  display: flex;
  width: 100%;
`;

const AppBody = styled.div`
  width: 100%;
  margin: 0 0 0 245px;
  padding: 30px;
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
      <AppBodyBox>
        {!invalidPages.includes(router?.pathname) && <NavBar />}
        <AppBody>{children}</AppBody>
      </AppBodyBox>
      {!invalidPages.includes(router?.pathname) && <ButtonUser />}
    </AppMain>
  );
};

export default Layout;
