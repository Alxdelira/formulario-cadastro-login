import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Menu() {

  const [menuFechado, setMenuFechado] = useState(true);

  const menuItens = [
    { id: 1, url: "/home", icon: "/icons/home.svg", text: "Home" },
    { id: 2, url: "/usuarios/listar/1", icon: "/icons/user.svg", text: "Usuários" },
    { id: 3, url: "/usuarios/cadastrar", icon: "/icons/cadastrar-pessoa.svg", text: "Cadastrar Usuários" },
    { id: 4, url: "/sobre", icon: "/icons/info.svg", text: "Sobre" }
  ]

  return (
    <div className={`${styles.menu} ${menuFechado ? styles.menuFechado : ""}`} >
      <div className={styles.close_container}>
        <div onClick={() => {
          if (menuFechado) {
            setMenuFechado(false);
          } else {
            setMenuFechado(true)
          }
        }} className={styles.close_item}>
          <Image
            style={!menuFechado && { rotate: "180deg", transition: "0.5s" }}
            src={"/icons/arrow-right.svg"}
            width={24}
            height={24}
            alt="Fechar Menu"
            title="Fechar Menu"
          />
        </div>
      </div>
      <div className={styles.menu_itens}>
        {menuItens && menuItens.map((item) => (
          <Link className={styles.menu_item} href={item.url} key={item.id}>
            <div>
              <Image
                className={styles.image}
                src={item.icon}
                width={22}
                height={22}
                alt="Fechar Menu"
                title="Fechar Menu"
              />
            </div>
            <div className={styles.menu_text}>
              <p className={`${!menuFechado ? styles.text : ""}`}>{!menuFechado ? item.text : ""}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
