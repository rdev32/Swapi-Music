import dynamic from "next/dynamic";
import { FC, useMemo } from "react";

export const GetIcon: FC<{ name: string }> = ({ name }) => {
  const Icon = useMemo(
    () => dynamic(() => import(`../../../public/icons/Player/${name}.svg`)),
    [name]
  );
  if (Icon) {
    return <Icon />;
  }
  return null;
};

export const GetPlayerIcons: FC<{ name: string }> = ({ name }) => {
  const Icon = useMemo(
    () => dynamic(() => import(`../../../public/icons/Player/${name}.svg`)),
    [name]
  );
  if (Icon) {
    return <Icon />;
  }
  return null;
};


export const GetIcons = () => {
  const Icon = useMemo(
    () => dynamic(() => import("../../../public/landing/swapi.svg")),
    []
  );
  if (Icon) {
    return <Icon />;
  }
  return null;
};
