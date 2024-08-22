"use client";

import styles from "./page.module.css";
import Tale from "./_component/Tale";
import Arrow from "./_component/Arrow";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storyState, pictureState } from "@/app/recoil/atoms";
import { useRouter, redirect } from "next/navigation";

export default function TalePage() {
  const story = useRecoilValue(storyState);
  const [picture, setPicture] = useRecoilState(pictureState);
  const [loadingImage, setLoadingImage] = useState(false);
  const [page, setPage] = useState(-1);
  const router = useRouter()

  console.log("tale before>>>", story);
  console.log("tale before>>>", picture);

  useEffect(() => {
    if (!story.title) {
      redirect("/");
    }
    async function fetchPicture() {
      if (picture.length <= page + 1) {
        try {
          setLoadingImage(true);
          const res = await fetch("/api/picture", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: page === -1 ? story.title : story.story[page].content,
            }),
          });

          if (res.ok) {
            const respicData = await res.json();
            const url = respicData?.data[0].url;
            console.log(url);
            setPicture((prev) => [...prev, { url: url }]);
            console.log(picture);
          } else {
            throw new Error("creating picture failed");
          }
        } catch (err) {
          console.error(err);
          alert(`There is something wrong here... let's try again! ${err}`);
          // redirect("/");
          router.refresh()
        } finally {
          setLoadingImage(false);
        }
      }
    }
    fetchPicture();
  }, [page]);
  return (
    <>
    <main className={styles.main}>
      <div className={styles.taleContainer}>
        <Tale story={story} page={page} picture={picture} />
        <Arrow page={page} setPage={setPage} loadingImage={loadingImage}/> 
      </div>
    </main>
    </>
  );
}
