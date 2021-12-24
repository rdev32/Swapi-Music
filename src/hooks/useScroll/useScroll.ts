import { RefObject, useEffect, useState } from "react";

type ScrollProps = {
  ref?: RefObject<HTMLElement> | any
  data?: any
};

const useScroll = ({ ref, data }: ScrollProps) => {
  const [scroll, setScroll] = useState(0);
  const [count, setcount] = useState(0);

  useEffect(() => {
    if (ref?.current) {
      window.onscroll = () => {
        if (ref.current) {
          if (window.innerHeight + window.scrollY >= ref.current.scrollHeight) {
            if (data && data?.offset <= data.total) {
              setcount(count + 50);
            }
          }
        }
        setScroll(window.scrollY);
      };
    }
    return () => {
      window.onscroll = () => {};
    };
  }, [ref, count, data]);
  return [scroll, count];
};


export default useScroll