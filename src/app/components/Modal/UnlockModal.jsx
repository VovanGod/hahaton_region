'use client'
import styles from './Modal.module.scss';

export default function UnlockModal({ isOpen, onClose, onUnlock, locationName, price }) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Разблокировать локацию</h3>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>
          <p style={{textAlign: 'center', fontSize: 18, marginBottom: 24}}>
            Чтобы открыть <b>{locationName}</b>, нужно заплатить <b>{price} монет</b>.
          </p>
          <div style={{display: 'flex', gap: 12}}>
            <button className={styles.buyButton} onClick={onUnlock} style={{flex: 1}}>
              Разблокировать за {price} монет
            </button>
            <button className={styles.exitBtn} onClick={onClose} style={{flex: 1}}>
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 