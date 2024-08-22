"use client";

import StoryCard from "./StoryCard";
import { Story } from "@/model/Story";
import { Picture } from "@/model/Picture";
import Image from "next/image";
import styles from "./storyCard.module.css";

type Props = {
  story: Story;
  picture: Picture[];
  page: number;
};

export default function Tale({ story, picture, page }: Props) {
  if (page === -1)
    return (
      <>
        <h1 className={styles.storyCardTitle}>{story.title}</h1>
        {picture[0]?.url && (
          <div className={styles.imageWrapper}>
            <Image
              src={picture[0].url as string}
              alt="picture"
              width={300}
              height={300}
            />
          </div>
        )}
      </>
    );

  if (page > -1)
    return (
      <>
        {story.story.map((chapter, i) => (
          <StoryCard
            page={page}
            picture={picture}
            chapter={chapter}
            currentPage={i}
            key={chapter.title}
          />
        ))}
      </>
    );

  return null;
}
