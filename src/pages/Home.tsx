/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

const Home = () => {
  const getTokenParams = (hash: string) => {
    const strHashTag = hash.substring(1);
    const paramsUrl = strHashTag.split('&');
    const paramsSplit = paramsUrl.reduce((acc: any, curr) => {
      console.log(curr);
      const [key, value] = curr.split('=');
      acc[key] = value;
      return acc;
    }, {});
    return paramsSplit;
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, token_type, expires_in } = getTokenParams(
        window.location.hash
      );

      localStorage.setItem('token', access_token);
      localStorage.setItem('tokenType', token_type);
      localStorage.setItem('expiresIn', expires_in);
    }
  }, []);
  return (
    <>
      <h1>Home</h1>
      {/* <GetPlayList /> */}
    </>
  );
};

export default Home;
