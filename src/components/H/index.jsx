import styles from "./styles.module.scss";
import classNames from "classnames";

export default function H({ children, level, padding, padding_top, padding_right, padding_left, padding_bottom, margin, margin_top, margin_right, margin_left, margin_bottom, ...props }) {
  
  const Heading = `h${level}`;
  const className = classNames(styles[`h${level}`]);
  
  // Caso seja passado um valor para o padding ou margin, ele será aplicado ao elemento
  const style = {
    ...(padding && { padding }),
    ...(padding_top && { paddingTop: padding_top }),
    ...(padding_bottom && { paddingBottom: padding_bottom }),
    ...(padding_left && { paddingLeft: padding_left }),
    ...(padding_right && { paddingRight: padding_right }),
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
  };
  
  return (
    <Heading className={className} style={style} {...props}>{children}</Heading>
  );
}