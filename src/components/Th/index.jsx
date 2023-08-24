import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Th({ children, center, left, right, ...props }) {
  
  const classes = classNames({
    [styles.th]: true, 
    [styles.center]: props.center,
    [styles.right]: props.right,
    [styles.left]: props.left,
  });
  
  return <th className={classes} {...props}>{children}</th>;
}