'use client'

type Props = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    loadingImage: boolean
}

export default function Arrow({page, setPage, loadingImage}: Props) {


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
            {page > -1 ? <button onClick={onClickLeft} disabled={loadingImage}>left</button> : null}
            {page < 4 ? <button onClick={onClickRight} disabled={loadingImage}>right</button> : null}
            
        </div>
        </>
    )
}