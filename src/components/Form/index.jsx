import styles from './styles.module.scss';

export default function Form({ children, ...props }) {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
}