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
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((resp: any | { error: { status: number } }) => {

          resp && setData(resp.data);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            router.replace("/");
          }
          console.log(err);
        }); 
    return () => {};
  }, [url]);
  return data;
}

export default GetData;
