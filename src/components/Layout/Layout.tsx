import { FC } from 'react';
import NavBar from '../../components/NavBar/NavBar';

interface IProps {
  router: {
    pathname: string;
  };
}

const Layout: FC<IProps> = ({ children, router }) => {
  const validIncludes = ['/', '/auth/Login'];

  return (
    <main style={{ display: 'flex', width: '100%' }}>
      {!validIncludes.includes(router?.pathname) && <NavBar />}
      {children}
    </main>
  );
};

export default Layout;
