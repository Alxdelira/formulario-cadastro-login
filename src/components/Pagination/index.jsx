import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function Pagination({ maxPageComponent, link, numberPages, selectPage }) {
  
  // selectPage -> pagina atual
  // link -> link 
  // numberPage -> máximo de páginas
  // maxPageComponent -> quantidade de página que será mostrada no componente sempre deve ser um número impar

  const [pagination, setPagination] = useState([]);

  function PaginationFunction(maxPageComponent, page, totalPagesApi, link) {
    let pages = [];
    let metade = Math.floor(maxPageComponent / 2);
    let pinicio = parseInt(page) - metade;
    let pfim = parseInt(page) + metade;

    // inicio menor ou igual a zero, deslocar pra direita
    if (pinicio <= 0) {
      pfim += 1 - pinicio;
      pinicio = 1;
    }

    if (pfim > totalPagesApi) {
      pinicio += totalPagesApi - pfim
      pfim = totalPagesApi
    }

    for (let i = pinicio; i <= pfim; i++) {
      if (i <= 0 || i > totalPagesApi)
        continue;

      let paginaAtual = page == i ? true : false
      pages.push({ link: link, id: i, page: i, active: paginaAtual })
    }

    return pages;
  }

  useEffect(() => {
    setPagination(PaginationFunction(maxPageComponent, selectPage, numberPages, link))
  }, [selectPage,numberPages])

  return (
    <nav className={styles.container}>
      {/* <div
        className={`${styles.container_item} ${selectPage == 1 ? styles.disabled : ""}`} >
        <Link
          href={link + "/" + 1 + "?" + query}
          title='Ir para primeira página'>
          <Image
            width={32}
            height={32}
            alt="Primeira Página"
            src={"/icons/double-arrow-left.svg"}
          />
        </Link>
      </div> */}
      <div
        className={`${styles.container_item} ${selectPage == 1 ? styles.disabled : ""}`}>
        <Link
        href={link + + (Number(selectPage) - 1)}
          title='Página anterior'>
          <Image
            width={24}
            height={24}
            alt="Pagina Anterior"
            src={"/icons/arrow-left.svg"}
          />
        </Link>
      </div>
      {selectPage > Math.floor((maxPageComponent / 2) + 1) && (
        <div className={styles.pagination}>
          <Link
            href={link + 1 }
            className={`${styles.page_item}`}
            title={`Ir para a página 1`}>
            1
          </Link>
        </div>
      )}
      {selectPage > Math.floor((maxPageComponent / 2) + 1) + 1 && (
        <div className={styles.container_dot}>
          <p className={styles.dot}>...</p>
        </div>
      )}
      <ul className={styles.pagination}>
        {pagination.map(page => (
          <li>
            <Link key={page.id}
              href={link + + page.page }
              className={`${styles.page_item} ${page.page == selectPage ? styles.active : ''}`}
              title={`Ir para a página ${page.page}`}>
              {page.page}
            </Link>
          </li>
        ))}
      </ul>
      {pagination && (
        <>
          {selectPage < (Number(numberPages) - (Math.floor((maxPageComponent / 2) + 1))) && (
            <div className={styles.container_dot}>
              <p className={styles.dot}>...</p>
            </div>
          )}
          {selectPage < (Number(numberPages) - (Math.floor((maxPageComponent / 2)))) && (
            <div className={styles.pagination}>
              <Link
                href={link + numberPages}
                className={`${styles.page_item}`}
                title={`Ir para última página`}>
                {numberPages}
              </Link>
            </div>
          )}

        </>
      )}
      <div
        className={`${styles.container_item} ${selectPage == numberPages ? styles.disabled : ""}`}>
        <Link
          href={link + (Number(selectPage) + 1)}
          title='Próxima página'>
          <Image
            width={24}
            height={24}
            alt="Próxima página"
            src={"/icons/arrow-right.svg"}
          />
        </Link>
      </div>
      {/* <div
        className={`${styles.container_item} ${selectPage == numberPages ? styles.disabled : ""}`}>
        <Link
          href={link + "/" + numberPages + "?" + query}
          title='Ir para última página'>
          <Image
            width={32}
            height={32}
            alt="Arrow left"
            src={"/icons/double-arrow-right.svg"}
          />
        </Link>
      </div> */}
    </nav>
  );
};
