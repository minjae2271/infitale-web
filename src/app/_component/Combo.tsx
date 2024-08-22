"use client";

import styles from "./combo.module.css";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import { characterState, themeState, backgroundState, storyState, pictureState } from "../recoil/atoms";
import { useState } from "react";
import cx from 'classnames';

export default function Combo() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const character = useRecoilValue(characterState)
  const theme = useRecoilValue(themeState)
  const background = useRecoilValue(backgroundState)

  const [story, setStory] = useRecoilState(storyState);
  const [picture, setPicture] = useRecoilState(pictureState)

    console.log(story)
    console.log(picture)

  const onClickCombo = async () => {

    if(!character) {
      alert(`please choose ${character}`)
    }
    if(!theme) {
      alert(`please choose ${theme}`)
    }
    if(!background) {
      alert(`please choose ${background}`)
    }
    try {
      setLoading(true)

      const res = await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          character,
          theme,
          background
        })
      })
      
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setStory(data)
      } else {
        throw new Error("creating story failed");
      }
      router.replace(`/tale`)

    } catch(err) {
      console.log("Oops! Something is wrong.")
      console.error(err)
      alert(`There is something wrong here... let's try again! ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="combo" className={styles.comboWrapper}>
      {!character && !theme && !background && 
        <div className={styles.comboBox}>
          <div>choose your</div>
          <div className={styles.comboWord1}>character</div>
          <div className={styles.comboWord2}>theme</div>
          <div className={styles.comboWord3}>background!</div>
        </div>
      }
      <div className={styles.comboPickWrapper}>
        <div className={styles.comboPick}>{character}</div>
        {character && <div>+</div>}
        <div className={styles.comboPick}>{theme}</div>
        {theme && <div>+</div>}
        <div className={styles.comboPick}>{background}</div>
      </div>
      {character && theme && background && (
            <button onClick={onClickCombo} className={cx(loading ? styles.loading : styles.button)} disabled={loading}>
                {loading ? "making fairytale!" : "make me fairytale!"}
            </button>
      )}
    </div>
  );
}
