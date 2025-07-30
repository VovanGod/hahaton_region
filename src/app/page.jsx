
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.fPage}>
      <img src="/Ellipse 1.png" className={styles.ellipse} alt="" />
      <img src="/Ellipse 2.png" className={styles.ellipse} alt="" />
      <img src="/Ellipse 2.png" className={styles.ellipse} alt="" />
      <img src="/Ellipse 4.png" className={styles.ellipse} alt="" />
      <img src="/bear1.png" className={styles.bear}></img>
      <img src="/fox.png" className={styles.fox}></img>
      <div className={styles.info}>
        <a href="#!" className="logo">
            <img src="/logo.png"></img>
        </a>
        <h1>
          ki<div>d</div><div>s</div>
        </h1>
      </div>

      <div className={styles.btn_wrapper}>
        <Link className={styles.btn} href="/login">Войти по телефону</Link>
        <Link className={styles.btn_card} href="/account">Войти по номеру карты</Link>
      </div>
    </div>
  );
}
