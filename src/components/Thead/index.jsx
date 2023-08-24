import styles from "./styles.module.scss";

export default function Thead({ children }) {
  return <thead className={styles.thead}>{children}</thead>;
}