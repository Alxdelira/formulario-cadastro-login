import styles from "./Message.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Message({ children, time, type, position })  {


// Exemplo de uso do componente message
 
//   <ContainerMessage position="top_right">
//   <Message position="top_right" type="success" time={5}>Disciplina vinculada com sucesso!</Message>
//   <Message position="top_right" type="success" time={10}>Disciplina vinculada com sucesso!</Message>
//   </ContainerMessage>


  let tempo = 1000 * time;

  const [ativo, setAtivo] = useState(true);
  const [none, setNone] = useState(false);

  const [cor, setCor] = useState("")

  const [message, setMessage] = useState({
    image: "",
    alt: "",
    closeImage: "",
    closeAlt: ""
  });

  useEffect(() => {

    if (!ativo) {
      setTimeout(() => {
        setNone(true);
      }, 1000) // tempo da destruição da mensagem
    }
  }, [!ativo])


  useEffect(() => {
    setTimeout(() => {
      setAtivo(false);
    }, tempo);

    type === "success" ? (
      setMessage((prevState) => ({ ...prevState, image: "/icons/checkCircle.svg" })),
      setMessage((prevState) => ({ ...prevState, alt: "icone de sucesso" })),
      setMessage((prevState) => ({ ...prevState, closeImage: "/icons/close.svg" })),
      setMessage((prevState) => ({ ...prevState, closeAlt: "Ícone de fechar" })),
      setCor("#28A34D;")) : "" //cor da barra de progresso

    type === "info" ? (
      setMessage((prevState) => ({ ...prevState, image: "/icons/info.svg" })),
      setMessage((prevState) => ({ ...prevState, alt: "icone de informação" })),
      setMessage((prevState) => ({ ...prevState, closeImage: "/icons/close.svg" })),
      setMessage((prevState) => ({ ...prevState, closeAlt: "Ícone de fechar" })),
      setCor("#318BBA;")) : "" //cor da barra de progresso


    type === "error" ? (
      setMessage((prevState) => ({ ...prevState, image: "/icons/error.svg" })),
      setMessage((prevState) => ({ ...prevState, alt: "icone de erro" })),
      setMessage((prevState) => ({ ...prevState, closeImage: "/icons/close.svg" })),
      setMessage((prevState) => ({ ...prevState, closeAlt: "Ícone de fechar" })),
      setCor("#D43939;")) : "" //cor da barra de progresso


    type === "warning" ? (
      setMessage((prevState) => ({ ...prevState, image: "/icons/warning.svg" })),
      setMessage((prevState) => ({ ...prevState, alt: "icone de aviso" })),
      setMessage((prevState) => ({ ...prevState, closeImage: "/icons/closeBlack.svg" })),
      setMessage((prevState) => ({ ...prevState, closeAlt: "Icone de fechar preto" })),
      setCor("#F5A623;")) : "" //cor da barra de progresso


  }, []);


  const classes = classNames({
    [styles.container]: true,
    [styles.none]: none ? true : false,
    [styles.success]: type === "success" ? true : false,
    [styles.info]: type === "info" ? true : false,
    [styles.error]: type === "error" ? true : false,
    [styles.warning]: type === "warning" ? true : false,
  })

  const AnimationEntrance = classNames({
    [styles.animation_top_right]: position === "top_right" ? true : false,
    [styles.animation_top_left]: position === "top_left" ? true : false,
    [styles.animation_bottom_right]: position === "bottom_right" ? true : false,
    [styles.animation_bottom_left]: position === "bottom_left" ? true : false,
  })

  const AnimationExit = classNames({
    [styles.hidden_top_left]: position === "top_left" && !ativo ? true : false,
    [styles.hidden_top_right]: position === "top_right" && !ativo ? true : false,
    [styles.hidden_bottom_left]: position === "bottom_left" && !ativo ? true : false,
    [styles.hidden_bottom_right]: position === "bottom_right" && !ativo ? true : false,
  })



  return (
    <div className={AnimationExit}>
      <div className={AnimationEntrance}>
        <div className={classes}>
          <div className={styles.principal}>
            <div className={styles.iconText}>
              {message.image !== "" && (
                <Image
                  src={message.image}
                  alt={message?.alt}
                  width={18.33}
                  height={18.33}
                  style={{ margin: "0 20px" }}
                />
              )}
              {children}
            </div>
            <div
              className={styles.iconText}
              onClick={() => {
                if (ativo) {
                  setAtivo(false);
                }
              }}
              style={{ cursor: "pointer" }}>
                {message.image !== "" && (
                  <Image
                    src={message.closeImage}
                    alt={message?.closeAlt}
                    width={13.18}
                    height={13.18}
                    style={{ margin: "0 20px" }}
                  />
                )}
            </div>
          </div>

          <div className={styles.progress}>
            <div className="progress_value"></div>
          </div>
        </div>
      </div>
      

      <style jsx>{`

      .progress_value {
        background-color: ${cor}; 
        animation: load ${time}s normal forwards;
        box-shadow: 0 10px 40px -10px #fff;
        height: 4px;
        border-radius: 100px;
      }
      @keyframes load {
        0% {
          width: 0%;
        }
        
        100% {
          width: 100%;
        }
      }

    `}</style>
    </div>
  );
}
