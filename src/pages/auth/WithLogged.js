/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';

const WithLogged = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('@!accessTokenSpotify'))
      if (user?.token) {
        Router.replace('/Home');
        return null;
      }
      return <WrappedComponent {...props} />
    }

    return null;
  };
};

export default WithLogged;
