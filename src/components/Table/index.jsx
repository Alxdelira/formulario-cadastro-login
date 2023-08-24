import styles from "./styles.module.scss";

export default function Table({ children }) {
  return <table className={styles.table}>{children}</table>;
}