import styles from "../page.module.css";

export default function Welcome() {
    return (
        <>
        <div className={styles.container}>
          <div className={styles.fairytaleBox}>
            <h1 className={styles.title}>Create Your Own Fairytales!</h1>
            <p className={styles.subtitle}>
              Unleash your imagination and craft magical stories.
            </p>
          </div>
        </div>
      </>
    )
}