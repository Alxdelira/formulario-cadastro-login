import styles from './styles.module.scss';
import Avatar from '../Avatar';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AppBar({ title }){
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/Alxdelira')
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  console.log(user);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.options}> 
        <div className={styles.avatar}>
          <Avatar
            urlImage={user.avatar_url}
            alt={`Imagem do ${user.name}`}
            link="/usuarios/perfil" />
        </div>
        <div className={styles.options}>
          <Link href='/'>
          Home
          </Link>
          <Link href='/usuarios'>
          Usuarios
          </Link>
        </div>
      </div>
    </header>
  )
}