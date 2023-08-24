import React from "react";
import styles from "./styles.module.scss";

export default function Checkbox({ label, checked, onChange }) {
  const handleOnChange = () => {
    const newValue = !checked;
    if (onChange) {
      onChange(newValue);
    }
  };
  

  return (
    <div className={styles.checkboxContainer }>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
      />
      <label className={styles.label} onClick={handleOnChange}>
        {label}
      </label>
    </div>
  );
}


