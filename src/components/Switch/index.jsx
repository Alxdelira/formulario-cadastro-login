import styles from "./styles.module.scss";
import classNames from "classnames";
import React, { useState } from "react";

export default function Switch({ info, danger, warning, success, ...props }) {
  const [checked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!checked);
  };

  console.log("Valor atual do Switch:", checked);

  const classes = classNames({
    [styles.slider]: true,
    [styles.info]: info,
    [styles.danger]: danger,
    [styles.warning]: warning,
    [styles.success]: success,
  });

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleSwitchChange}
        {...props}
      />
      <span className={classes}></span>
    </label>
  );
}
