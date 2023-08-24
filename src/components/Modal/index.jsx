import styles from "./styles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { useEffect } from "react"

export default function Modal({ booleanFunction, modalTitle, children, minWidth, ...props }) {

  const classes = classNames({
    [styles.modal]: true,
    [styles.minW80]: props.minW80
  })

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        booleanFunction()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div className={classes} {...props}>
      <div className={styles.content} style={{minWidth: minWidth}}>
        <div className={styles.header}>
          <h2 className={styles.title}>{modalTitle}</h2>
            <Image
              style={{ cursor: "pointer" }}
              src={"/icons/closeBlack.svg"}
              alt="Botão para Fechar"
              title="Fechar"
              width={20}
              height={20}
              onClick={booleanFunction}
            />
        </div>
        {children}
      </div>
    </div>
  );
}
