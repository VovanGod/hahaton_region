'use client';
import styles from '../round.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const QUESTIONS = [
  {
    q: 'Что такое бюджет?',
    options: [
      'Это список покупок',
      'Это план доходов и расходов',
      'Это копилка',
    ],
    answer: 1,
    explain: 'Бюджет — это план, в котором записано, сколько денег ты получишь и на что их потратишь.'
  },
  {
    q: 'Что лучше делать с деньгами, чтобы накопить на мечту?',
    options: [
      'Тратить всё сразу',
      'Откладывать часть денег',
      'Просить у родителей',
    ],
    answer: 1,
    explain: 'Чтобы накопить, нужно откладывать часть денег, а не тратить всё сразу.'
  },
  {
    q: 'Что такое монета?',
    options: [
      'Это вид денег',
      'Это игрушка',
      'Это сладость',
    ],
    answer: 0,
    explain: 'Монета — это металлические деньги.'
  },
];

export default function SchoolLocation() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const current = QUESTIONS[step];

  const handleSelect = idx => {
    if (showResult) return;
    setSelected(idx);
    setIsCorrect(idx === current.answer);
    setShowResult(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setIsCorrect(false);
    setStep(s => s + 1);
  };

  return (
    <div className={styles.locationBg} style={{ background: 'linear-gradient(120deg, #eaffea 0%, #fffbe6 100%)' }}>
      <div className={styles.locationContent}>
        <h2>Школа</h2>
        {step < QUESTIONS.length ? (
          <>
            <div className={styles.quizQ}>{current.q}</div>
            <div className={styles.quizOptions}>
              {current.options.map((opt, idx) => (
                <button
                  key={opt}
                  className={
                    styles.quizOption +
                    (showResult && idx === current.answer ? ' ' + styles.correct : '') +
                    (showResult && selected === idx && !isCorrect ? ' ' + styles.incorrect : '')
                  }
                  onClick={() => handleSelect(idx)}
                  disabled={showResult}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && (
              <div className={isCorrect ? styles.quizSuccess : styles.quizFail}>
                {isCorrect ? (
                  'Верно! '
                ) : (
                  <>
                    Неверно. Правильный ответ: <b>{current.options[current.answer]}</b>.<br/>
                  </>
                )}
                <span>{current.explain}</span>
              </div>
            )}
            {showResult && (
              <button className={styles.playBtn} onClick={handleNext}>
                {step === QUESTIONS.length - 1 ? 'Завершить' : 'Дальше'}
              </button>
            )}
          </>
        ) : (
          <div className={styles.rewardBlock}>
            <img src="/home/coin.svg" alt="coin" className={styles.coin} />
            <div className={styles.rewardText}>+3 монеты!<br/>Молодец!</div>
            <button className={styles.exitBtn} onClick={() => router.push('/game/round')}>Назад в город</button>
          </div>
        )}
      </div>
    </div>
  );
} 