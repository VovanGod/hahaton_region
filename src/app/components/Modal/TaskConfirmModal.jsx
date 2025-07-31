'use client'
import styles from './Modal.module.scss';

export default function TaskConfirmModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3>Подтверждение задания</h3>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                <div className={styles.content}>
                    <p style={{textAlign: 'center', fontSize: 18, marginBottom: 24}}>
                        Задание будет отправлено на подтверждение родителю
                    </p>
                    <button className={styles.buyButton} onClick={onConfirm} style={{width: '100%'}}>Подтвердить</button>
                </div>
            </div>
        </div>
    );
} 