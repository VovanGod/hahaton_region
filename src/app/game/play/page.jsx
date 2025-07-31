'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './play.module.scss';
import { useRouter } from 'next/navigation';

const GAME_TIME = 30; // секунд
const COIN_SIZE = 60;
const COIN_IMG = '/home/coin.svg';

function getRandomX() {
  return Math.floor(Math.random() * (window.innerWidth - COIN_SIZE - 20)) + 10;
}

export default function PlayGame() {
  const [coins, setCoins] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_TIME);
  const [gameOver, setGameOver] = useState(false);
  const router = useRouter();
  const intervalRef = useRef();

  // Таймер
  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(intervalRef.current);
  }, [time]);

  // Генерация монеток
  useEffect(() => {
    if (gameOver) return;
    const coinInterval = setInterval(() => {
      setCoins(coins => [
        ...coins,
        {
          id: Math.random().toString(36).slice(2),
          x: getRandomX(),
          y: -COIN_SIZE,
          speed: 2 + Math.random() * 2
        }
      ]);
    }, 800);
    return () => clearInterval(coinInterval);
  }, [gameOver]);

  // Анимация падения
  useEffect(() => {
    if (gameOver) return;
    const anim = setInterval(() => {
      setCoins(coins => coins
        .map(c => ({ ...c, y: c.y + c.speed }))
        .filter(c => c.y < window.innerHeight - 100)
      );
    }, 16);
    return () => clearInterval(anim);
  }, [gameOver]);

  const handleCoinClick = (id) => {
    setCoins(coins => coins.filter(c => c.id !== id));
    setScore(s => s + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setTime(GAME_TIME);
    setCoins([]);
    setGameOver(false);
  };

  return (
    <div className={styles.playBg}>
      <div className={styles.hud}>
        <div className={styles.timer}>⏰ {time} сек</div>
        <div className={styles.score}>Монет: {score}</div>
        <button className={styles.exitBtn} onClick={() => router.push('/account')}>Выйти</button>
      </div>
      <div className={styles.gameField}>
        {coins.map(coin => (
          <img
            src={COIN_IMG}
            key={coin.id}
            className={styles.coin}
            style={{ left: coin.x, top: coin.y, width: COIN_SIZE, height: COIN_SIZE }}
            onClick={() => handleCoinClick(coin.id)}
            alt="coin"
            draggable={false}
          />
        ))}
        {gameOver && (
          <div className={styles.gameOver}>
            <div className={styles.gameOverCard}>
              <h2>Игра окончена!</h2>
              <p>Ты поймал {score} монет{score === 1 ? 'у' : score < 5 && score > 1 ? 'ы' : ''}!</p>
              <button className={styles.playBtn} onClick={handleRestart}>Играть ещё</button>
              <button className={styles.exitBtn} onClick={() => router.push('/account')}>Выйти</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}