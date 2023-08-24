import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import Container from '../Container';
import Avatar from '../Avatar';

export default function AppBar({ title }) {

  const router = useRouter();

  const [modalSair, setModalSair] = useState(false);

  const [user, setUser] = useState('')
  useEffect(() => {
    fetch('https://api.github.com/users/Alxdelira')
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  function logout() {
    const { "cras-token": token } = parseCookies();

    if (token) {
      destroyCookie(undefined, "cras-token");
      router.push("/")
    }
  }

  return (
    <>
      {modalSair && (
        <Modal minWidth="30%" modalTitle="Deseja desconectar ?" booleanFunction={() => setModalSair(false)}>
          <Container margin_top="2rem" justifyCenter="true">
            <Button onClick={() => logout()}>Sim</Button>
            <Button onClick={() => setModalSair(false)} danger="true">Não</Button>
          </Container>
        </Modal>
      )}

      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.options}>
          <div className={styles.link}>
            <Link
              href="/perfil">
              <Avatar
                urlImage={user.avatar_url}
                alt={`Imagem de perfil do ${user.name}`}
              />
            </Link>
          </div>
          <div className={styles.logout} title='Sair da plataforma' onClick={() => setModalSair(true)}>
            <p>Sair</p>
          </div>
        </div>
      </header>
    </>
  )
}