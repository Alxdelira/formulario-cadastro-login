import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

function Select({ margin, margin_top, margin_right, margin_left, margin_bottom, children, ...props }, ref) {
  
  const classes = classNames({
    [styles.select]: true,    
    [styles.info]: props.info,
    [styles.danger]: props.danger,
    [styles.success]: props.success,
    [styles.warning]: props.warning
  });

  const style = {
    ...(margin && { margin }),
    ...(margin_top && { marginTop: margin_top }),
    ...(margin_bottom && { marginBottom: margin_bottom }),
    ...(margin_left && { marginLeft: margin_left }),
    ...(margin_right && { marginRight: margin_right }),
  };
  
  return (
    <select {...props} className={classes} style={style} ref={ref}>
      {children}
    </select>
  );
}

export default React.forwardRef(Select);