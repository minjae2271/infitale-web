"use client";

import styles from "./pick.module.css";
import cx from "classnames";
import useSWR from "swr";
import { characterState, themeState, backgroundState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

type Props = {
  type: string;
  pickInfo: string;
};

export default function Pick({ type, pickInfo }: Props) {
  // const { data: character } = useSWR<string>("/character");
  // const { data: theme } = useSWR<string>("/theme");
  // const { data: background } = useSWR<string>("/background");

  const [character, setCharacter] = useRecoilState(characterState);
  const [theme, setTheme] = useRecoilState(themeState);
  const [background, setBackground] = useRecoilState(backgroundState);

  // const { setPicks } = usePicks();

  const onClickPick = () => {
    // setPicks(type, pickInfo);
    if (type === "character") {
      setCharacter(pickInfo)
    } else if (type === "theme") {
      setTheme(pickInfo)
    } else {
      setBackground(pickInfo)
    }

    const toCombo = document.getElementById("combo");
    toCombo?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div
      onClick={onClickPick}
      className={cx(
        styles.pick,
        character === pickInfo || theme === pickInfo || background === pickInfo
          ? styles.picked
          : ""
      )}
    >
      {pickInfo}
    </div>
  );
}
