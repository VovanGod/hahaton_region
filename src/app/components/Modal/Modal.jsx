'use client'
import { useState } from 'react';
import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, onBuy, productName, productPrice }) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
                onClose();
            }, 2000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {!isSubmitted ? (
                    <>
                        <div className={styles.header}>
                            <h3>Покупка бонуса</h3>
                            <button className={styles.closeButton} onClick={onClose}>×</button>
                        </div>
                        
                        <div className={styles.content}>
                            <div className={styles.productInfo}>
                                <h4>{productName}</h4>
                                <p className={styles.price}>Стоимость: {productPrice} монет</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email для отправки бонуса:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Введите ваш email"
                                        required
                                    />
                                </div>
                                
                                <button type="submit" className={styles.buyButton}>
                                    Купить
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className={styles.success}>
                        <div className={styles.successIcon}>✓</div>
                        <h3>Успешно!</h3>
                        <p>Бонус отправлен на ваш email</p>
                    </div>
                )}
            </div>
        </div>
    );
} 