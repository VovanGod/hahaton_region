'use client';
import styles from '../round.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CORRECT = [
  'Промыть рану',
  'Обработать антисептиком',
  'Завязать бинтом',
];

const EXPLANATIONS = {
  'Промыть рану': 'Сначала нужно промыть рану, чтобы убрать грязь и микробы.',
  'Обработать антисептиком': 'После промывания рану нужно обеззаразить антисептиком.',
  'Завязать бинтом': 'В конце рана закрывается бинтом, чтобы защитить её.',
};

export default function PharmacyLocation() {
  const router = useRouter();
  const [pool, setPool] = useState([...CORRECT].sort(() => Math.random() - 0.5));
  const [order, setOrder] = useState([null, null, null]);
  const [selected, setSelected] = useState(null); // { type: 'pool'|'order', idx: number }
  const [result, setResult] = useState(null); // null | 'success' | 'fail'
  const [hint, setHint] = useState('');

  // Клик по карточке в пуле — выделить
  const handlePoolClick = idx => {
    if (result === 'success') return;
    setSelected({ type: 'pool', idx });
  };
  // Клик по слоту — вставить выбранную карточку
  const handleSlotClick = idx => {
    if (!selected || result === 'success') return;
    if (order[idx]) return;
    if (selected.type === 'pool') {
      // Переместить из пула в слот
      const newOrder = [...order];
      const newPool = [...pool];
      newOrder[idx] = pool[selected.idx];
      newPool.splice(selected.idx, 1);
      setOrder(newOrder);
      setPool(newPool);
      setSelected(null);
    } else if (selected.type === 'order') {
      // Переместить между слотами
      if (selected.idx === idx) return;
      if (order[idx]) return;
      const newOrder = [...order];
      newOrder[idx] = order[selected.idx];
      newOrder[selected.idx] = null;
      setOrder(newOrder);
      setSelected(null);
    }
  };
  // Клик по карточке в слоте — вернуть в пул
  const handleOrderCardClick = idx => {
    if (result === 'success') return;
    setPool([...pool, order[idx]]);
    const newOrder = [...order];
    newOrder[idx] = null;
    setOrder(newOrder);
    setSelected(null);
  };

  const checkOrder = () => {
    if (order.every((v, i) => v === CORRECT[i])) {
      setResult('success');
      setHint('');
    } else {
      setResult('fail');
      for (let i = 0; i < order.length; i++) {
        if (order[i] !== CORRECT[i]) {
          setHint(`Шаг ${i+1}: "${order[i]||'...'}" — неверно. ${EXPLANATIONS[CORRECT[i]]}`);
          break;
        }
      }
    }
  };

  const handleRetry = () => {
    setResult(null);
    setHint('');
    setPool([...CORRECT].sort(() => Math.random() - 0.5));
    setOrder([null, null, null]);
    setSelected(null);
  };

  return (
    <div className={styles.locationBg} style={{ backgroundImage: 'url(/game/chemistry.png)' }}>
      <div className={styles.locationContent}>
        <h2>Аптека</h2>
        <p>Мишка поранил лапу! Помоги ему — расставь шаги в правильном порядке:</p>
        <div className={styles.dragWrap}>
          <div className={styles.poolArea}>
            <div className={styles.poolTitle}>Действия</div>
            {pool.map((step, idx) => (
              <div
                key={step}
                className={styles.stepCard + (selected && selected.type === 'pool' && selected.idx === idx ? ' ' + styles.selected : '')}
                onClick={() => handlePoolClick(idx)}
                style={{ cursor: result === 'success' ? 'default' : 'pointer' }}
              >
                {step}
              </div>
            ))}
          </div>
          <div className={styles.orderArea}>
            <div className={styles.poolTitle}>Порядок помощи</div>
            {order.map((step, idx) => (
              <div
                key={idx}
                className={styles.stepSlot + (selected && selected.type === 'order' && selected.idx === idx ? ' ' + styles.selectedSlot : '')}
                onClick={() => handleSlotClick(idx)}
              >
                {step ? (
                  <div
                    className={styles.stepCard}
                    onClick={() => handleOrderCardClick(idx)}
                    style={{ cursor: result === 'success' ? 'default' : 'pointer', background: '#fffbe6' }}
                  >
                    {step}
                  </div>
                ) : <span className={styles.slotPlaceholder}>Перетащи или кликни</span>}
              </div>
            ))}
          </div>
        </div>
        {result === 'success' ? (
          <div className={styles.rewardBlock}>
            <img src="/home/coin.svg" alt="coin" className={styles.coin} />
            <div className={styles.rewardText}>+2 монеты!<br/>Молодец!</div>
          </div>
        ) : (
          <>
            {result === 'fail' && <div className={styles.hint}>{hint}</div>}
            <button className={styles.playBtn} onClick={checkOrder} disabled={order.some(s => !s)}>Проверить</button>
            {result === 'fail' && <button className={styles.exitBtn} onClick={handleRetry}>Попробовать ещё раз</button>}
          </>
        )}
        <button className={styles.exitBtn} onClick={() => router.push('/game/round')}>Назад в город</button>
      </div>
    </div>
  );
} 