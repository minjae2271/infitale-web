'use client'

type Props = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Arrow({page, setPage}: Props) {


    const onClickLeft = () => {
        setPage((prev) => prev - 1)
        console.log(page)
    }
    const onClickRight = () => {
        setPage((prev) => prev + 1)
        console.log(page)
    }

    return (
        <>
        <div>
            {page > -1 ? <button onClick={onClickLeft}>left</button> : null}
            {page < 4 ? <button onClick={onClickRight}>right</button> : null}
            
        </div>
        </>
    )
}