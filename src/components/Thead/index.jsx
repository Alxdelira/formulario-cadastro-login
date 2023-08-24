import styles from "./styles.module.scss";

export default function Theade({ children }) {
  return <thead className={styles.thead}>{children}</thead>;
}