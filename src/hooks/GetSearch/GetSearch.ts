import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function GetSearch<Type>(
  search: string,
  setMount: Dispatch<SetStateAction<boolean>>
) {
  const [data, setData] = useState<Type>({} as Type);
  const [count, setCount] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    const handler = () => {
      const url = `https://api.spotify.com/v1/search?&include_external=audio&q=${search}&type=album,track,artist,playlist,episode,show`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token") || Cookies.get("reserve_token")}`,
          },
        })
        .then((resp: any | { error: { status: number } }) => {
          // if (resp?.error?.status === 401) {
          // router.replace("/");
          // } else {
          setData(resp.data);
          setMount(true);
          router.push({
            pathname: "/Search",
            query: {
              q: search,
            },
          });
          // }

          // resp.data && setMount(true)
          // return setData(resp.data)
        })
        .catch((err) => {
          if (Cookies.get("token")  && err?.response?.status === 401 ) {
            router.push("/")

            Cookies.remove("token");

          } 
          else if ( Cookies.get("reserve_token") && err?.response?.status === 401) {
            router.push("/")

            Cookies.remove("reserve_token");

          }
          router.push("/")

        }); 
    };
    if (count === 20 && search !== "") {
      handler();
    }
    return () => {
      setData({} as Type);
    }
    
  }, [count]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search !== "" && count < 20) {
        setCount(count + 1);
        setMount(false);
      }
    }, 50);
    return () => clearTimeout(handler);
  }, [count, search]);
  return { data, setCount };
}

export default GetSearch;
