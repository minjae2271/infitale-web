import styles from "./pickSection.module.css";
import Pick from "./Pick"

type Props = {
    type: string,
    picks: string[],
}

export default function PickSection({ type, picks }: Props) {
    return (
        <>
            <h1>{type}</h1>
            <section className={styles.pickSection}>
                {picks.map((pick, i) => <Pick key={pick} type={type} pickInfo={pick} />)}
            </section>
        </>
    )
}