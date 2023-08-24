import styles from "./styles.module.scss";

export default function Tbody({ children }) {
  return <tbody className={styles.tbody}>{children}</tbody>;
}