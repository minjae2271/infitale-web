'use client'

import styles from "./arrow.module.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft  } from "react-icons/fa";

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
        <div className={styles.arrowWrapper}>
            {page > -1 ? <button className={styles.arrowButton} onClick={onClickLeft} disabled={loadingImage}><FaArrowAltCircleLeft size={30} /></button> : null}
            {page < 4 ? <button className={styles.arrowButton} onClick={onClickRight} disabled={loadingImage}><FaArrowAltCircleRight size={30}/></button> : null} 
        </div>
        </>
    )
}