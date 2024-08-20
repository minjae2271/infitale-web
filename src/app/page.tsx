import styles from "./page.module.css";
import PickSection from "./_component/PickSection";
import Combo from "./_component/Combo";
import { Kanit } from "next/font/google";
import cx from "classnames";
import Welcome from "./_component/Welcome";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  const picks = require("../../public/pick.json");

  return (
    <main className={cx(styles.main, kanit.className)}>
      <Welcome />
      <Combo />
      <div className={styles.pickSectionWrapper}>
        <PickSection type="character" picks={picks.character} />
        <PickSection type="theme" picks={picks.theme} />
        <PickSection type="background" picks={picks.background} />
      </div>
    </main>
  );
}
