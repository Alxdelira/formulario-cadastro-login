import Link from 'next/link';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Menu({ menuItens }) {

  const [showMenu, setShowMenu] = useState(true);

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuItens);
  }, [menuItens]);
  
  return (
    <nav className={styles.menuContainer}>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.url} className={styles.menuItem}>
              <Image
                src={item.icon}
                alt={item.text}
                width='24'
                height='24' />
              {showMenu && <span>{item.text}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={styles.menuButton}
        title={showMenu ? 'Esconder menu' : 'Mostrar menu'}
        onClick={e => setShowMenu(!showMenu)}>
        <Image 
          src={showMenu ? '/icons/arrow-left.svg' : '/icons/arrow-right.svg'} 
          alt={showMenu ? 'Esconder menu' : 'Mostrar menu'}
          width='30'
          height='30' />
      </div>
    </nav>
  );
}