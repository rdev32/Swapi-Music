import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function GetData<Type>(url: string) {
  const [data, setData] = useState<Type>({} as Type);
  const router = useRouter();
  useEffect(() => {
    url &&
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token") || Cookies.get("reserve_token")}`,
          },
        })
        .then((resp: any | { error: { status: number } }) => {

          resp && setData(resp.data);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {

            if (Cookies.get("token")  && err?.response?.status === 401 ) {
              router.push("/")
              Cookies.remove("token");
            }  
            else if ( Cookies.get("reserve_token") && err?.response?.status === 401) {
              router.push("/")

              Cookies.remove("reserve_token");

            }
            router.push("/")

          }
        }); 
    return () => {
      setData({} as Type);
    }
        
  }, [url]);
  return data;
}

export default GetData;
