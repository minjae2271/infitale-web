'use client'

import { useRecoilValue } from "recoil"
import { storyState } from "@/app/recoil/atoms";
import StoryCard from "./StoryCard";
import { Story } from "@/model/Story";
import { Picture } from "@/model/Picture";

type Props = {
  story: Story
  picture: Picture[]
  page: number
}

export default function Tale({ story, picture, page }: Props) {

  if (page === -1)
    return (
        <>
            <div>{story.title}!</div>
            {picture[0]?.url && <img style={{width: "150px", height: "150px"}} src={picture[0].url as string} alt="pircture" />}
            
        </>
    )


  if (page > -1)
  return (
    <>
      {story.story.map((chapter, i) => <StoryCard page={page} picture={picture} chapter={chapter} currentPage={i} key={chapter.title}/>)}
    </>
  )

  return null
}
