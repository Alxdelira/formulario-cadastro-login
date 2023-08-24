import styles from './styles.module.scss';

export default function Option({ children, ...props }) {
  return <option {...props} className={styles.option}>{children}</option>;
}