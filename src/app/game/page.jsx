'use client'
import styles from './game.module.scss';
import { useRouter } from 'next/navigation';

export default function GameWelcome() {
    const router = useRouter();
    return (
      <div className={styles.gameBg}>
        <div className={styles.bearMsgWrap}>
          <img src="/game/bear.svg" alt="Инвестоша" className={styles.bear} />
          <div className={styles.speechBubble}>
            Привет! Я Инвестоша, с тобой вместе мы сделаем первые шаги к дружбе с деньгами!<br />
            Нажимай кнопку играть и узнавай больше об этом интересном мире.
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.playBtn} onClick={() => router.push('/game/play')}>ИГРАТЬ</button>
          <button className={styles.playBtn} onClick={() => router.push('/game/round')}>ИГРАТЬ: ГОРОД</button>
        </div>
      </div>
    );
}