import styles from "../page.module.css";
import { TextEffect } from './TextEffect';

export default function Welcome() {
    return (
        <>
        <div className={styles.container}>
          <div className={styles.fairytaleBox}>
          
            <div className={styles.title}>
            <TextEffect per='word' as='h3' preset='slide'>
              Create Your Own Fairytales!
            </TextEffect>
              </div>
            <div className={styles.subtitle}>
            <TextEffect per='char' preset='fade'>
              Unleash your imagination and craft magical stories.
            </TextEffect>
            </div>
          </div>
        </div>
      </>
    )
}