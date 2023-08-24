import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Avatar({ urlImage, alt, link = null, big, small, ...props}){

  const classes = classNames({
    [styles.image]: true,
    [styles.big]: big,
    [styles.small]: small,
  });

  return(
    <>
      {link && 
      <Link href={link} className={styles.link}>
        <Image
          className={classes}
          src={urlImage}
          alt={alt}
          title={alt}
          width="32"
          height="32"
        />
      </Link>}
      {!link &&
        <Image
          className={classes}
          src={urlImage}
          alt={alt}
          title={alt}
          width="32"
          height="32"
        />}
    </>
  );
}