import styles from './loading.module.css'

export default function Loading({
    isLoading
}: {
    isLoading: boolean;
}) {
    return (
        <div className={`${styles["busy-blocker"]} ${isLoading ? styles["busy-blocker--open"] : ""}`}>
            <div className={styles["busy-blocker__dots"]}>
                <div className={styles["busy-blocker__dot"]}></div>
                <div className={styles["busy-blocker__dot"]}></div>
                <div className={styles["busy-blocker__dot"]}></div>
                <div className={styles["busy-blocker__dot"]}></div>
            </div>
        </div>
    );
} 