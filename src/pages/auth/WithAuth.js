/* eslint-disable react/display-name */
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter();
      const user = JSON.parse(localStorage.getItem('@!user'))
      if (!user?.token) {
        Router.replace('/auth/Login');
        return null;
      }
      return <WrappedComponent {...props} />
    }

    return null;
  };
};

export default withAuth;
