import styles from "./styles.module.scss";

export default function Text({children, ...props}) {
  return <p className={styles.text} {...props}>{children}</p>
}