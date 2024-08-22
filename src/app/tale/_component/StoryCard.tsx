import { Chapter } from "@/model/Chapter";
import { Picture } from "@/model/Picture";
import Image from "next/image";
import styles from "./storyCard.module.css";

type Props = {
  page: number;
  picture: Picture[];
  chapter: Chapter;
  currentPage: number;
};

export default function StoryCard({
  page,
  picture,
  chapter,
  currentPage,
}: Props) {
  if (currentPage === page)
    return (
      <>
        <div className={styles.storyCardWrapper}>
          <h1 className={styles.storyCardTitle}>{chapter.title}</h1>
          <p className={styles.storyCardContent}>{chapter.content}</p>

          {picture[page + 1]?.url && (
            <div className={styles.imageWrapper}>
                <Image
                src={picture[page + 1].url as string}
                alt="picture"
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
      </>
    );

  return null;
}
