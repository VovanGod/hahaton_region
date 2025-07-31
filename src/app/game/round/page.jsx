'use client';
import styles from './round.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import UnlockModal from '../../components/Modal/UnlockModal';

const locations = [
  { key: 'pharmacy', label: 'Аптека', x: '22%', y: '38%', unlocked: true, price: 0 },
  { key: 'school', label: 'Школа', x: '75%', y: '60%', unlocked: true, price: 0 },
  { key: 'shop', label: 'Магазин', x: '40%', y: '70%', unlocked: false, price: 5 },
  { key: 'bank', label: 'Банк', x: '60%', y: '30%', unlocked: false, price: 20 },
];

export default function GameRound() {
  const router = useRouter();
  const [unlockedLocations, setUnlockedLocations] = useState(['pharmacy', 'school']);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    if (location.unlocked || unlockedLocations.includes(location.key)) {
      router.push(`/game/round/${location.key}`);
    } else {
      setSelectedLocation(location);
      setModalOpen(true);
    }
  };

  const handleUnlock = () => {
    if (selectedLocation) {
      setUnlockedLocations(prev => [...prev, selectedLocation.key]);
      setModalOpen(false);
      setSelectedLocation(null);
    }
  };

  return (
    <div className={styles.townBg}>
      <img src="/game/town.svg" alt="Город" className={styles.townImg} />
      {locations.map(loc => {
        const isUnlocked = loc.unlocked || unlockedLocations.includes(loc.key);
        return (
          <button
            key={loc.key}
            className={styles.flag + (isUnlocked ? '' : ' ' + styles.locked)}
            style={{ left: loc.x, top: loc.y }}
            onClick={() => handleLocationClick(loc)}
          >
            <img src={isUnlocked ? "/game/hat.svg" : "/game/dollar.svg"} alt="Флаг" />
            <span>{loc.label}</span>
            {!isUnlocked && <div className={styles.price}>{loc.price} монет</div>}
          </button>
        );
      })}
      <button className={styles.exitBtn} onClick={() => router.push('/game')}>Назад</button>
      
      <UnlockModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onUnlock={handleUnlock}
        locationName={selectedLocation?.label}
        price={selectedLocation?.price}
      />
    </div>
  );
}