import styles from "./ContainerMessage.module.scss";
import classNames from "classnames";
import React from "react";

export default function ContainerMessage({ children, position }) {

  const classes = classNames({
    [styles.janela]: true,
    [styles.top_right]: position === "top_right" ? true : false,
    [styles.top_left]: position === "top_left" ? true : false,
    [styles.bottom_right]: position === "bottom_right" ? true : false,
    [styles.bottom_left]: position === "bottom_left" ? true : false,
  })

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

