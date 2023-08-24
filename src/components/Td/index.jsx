import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Td({ children, left, right, ...props }) {
  
  const classes = classNames({
    [styles.td]: true, 
    [styles.right]: props.right,
    [styles.left]: props.left,
  });
  
  return <td className={classes} {...props}>{children}</td>;
}