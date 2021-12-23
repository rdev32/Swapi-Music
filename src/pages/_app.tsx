/* eslint-disable react-hooks/rules-of-hooks */
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import AppHead from "../components/Head/Head";
import Characters from "../helpers/pages/discography/Characters";
import useActiveOptContext from "../hooks/useActiveOptContext/useActiveOptContext";
import Layout from "../Layout/Layout";
import "../styles/globals.css";
import { Materialize } from "../styles/Normalize";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [active, setActive] = useState(
    router.pathname.replace(/\s+/g, "").substring(0, 999999)
  );
  const [count, setcount] = useState(0);

  useEffect(() => {
    for (
      let index = 1;
      index < router.asPath.split(" ").join("").length;
      index++
    ) {
      if (
        router.asPath.split(" ").join("")[index] === "/" ||
        router.asPath.split(" ").join("")[index] === "#" ||
        router.asPath.split(" ").join("")[index] === "?"
      ) {
        return;
      } else {
        setcount(index);
      }
    }
    return () => {
      setcount(0);
    }
  }, [router.asPath]);

  return (
    <useActiveOptContext.Provider value={{ active, setActive }}>
      <AppHead
        title={`SwapiMusic ${
          Characters(router.asPath.slice(1, count + 1))
            ? `| ${Characters(router.asPath.slice(1, count + 1))} `
            : ""
        } `}
      />
      <Global styles={Materialize} />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </useActiveOptContext.Provider>
  );
};

export default MyApp;
