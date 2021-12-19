import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import determineDisplaySize from "./DisplaySize/DisplaySize";

const useWindowSize = () => {
  const [currentDisplaySize, setCurrentDisplaySize] = useState(0);
  useLayoutEffect(() => {
    setCurrentDisplaySize(determineDisplaySize(window.innerWidth));
  }, []);
  useEffect(() => {
    const handler = () =>
      setCurrentDisplaySize(determineDisplaySize(window.innerWidth));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return useMemo(() => currentDisplaySize, [currentDisplaySize]);
};

export default useWindowSize;
