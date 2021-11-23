import { FC } from 'react';
import Link from 'next/link';
interface IProps {}

const Index: FC<IProps> = (props) => {
  return (
    <main>
      <h1>Landing</h1>
      <hr />
      <h2>Welcome to Swagger</h2>
      <Link href="/login/login">
        <a>Login</a>
      </Link>
    </main>
  );
};

export default Index;
