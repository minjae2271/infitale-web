import { Chapter} from "@/model/Chapter"
import { Picture } from "@/model/Picture";

type Props = {
    page: number,
    picture: Picture[]
    chapter: Chapter,
    currentPage: number
}

export default function StoryCard({ page, picture, chapter, currentPage }: Props) {

    if(currentPage === page)
    return (
        <>
            <div>{chapter.title}</div>
            <div>{chapter.content}</div>
            {picture[page + 1]?.url && <img style={{width: "150px", height: "150px"}} src={picture[page + 1].url as string} alt="pircture" />}
        </>
    )

    return null
}