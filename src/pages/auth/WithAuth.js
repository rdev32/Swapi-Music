/* eslint-disable react/display-name */
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    if (typeof window !== 'undefined') {
      const { token } = JSON.parse(localStorage.getItem('@!user'))
      console.log(token);
      if (!token) {
        Router.replace('/auth/Login');
        return null;
      }
      return <WrappedComponent {...props} />
    }

    return null;
  };
};

export default withAuth;
