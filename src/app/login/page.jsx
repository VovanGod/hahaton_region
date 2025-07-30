'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";

export default function Login() {
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setPhone(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/account');
    };

    return (
        <div className={styles.fPage}>
            <img src="/Ellipse 1.png" className={styles.ellipse} alt="" />
            <img src="/Ellipse 2.png" className={styles.ellipse} alt="" />
            <img src="/Ellipse 2.png" className={styles.ellipse} alt="" />
            <img src="/Ellipse 4.png" className={styles.ellipse} alt="" />
            <img src="/bear1.png" className={styles.bear} alt="" />
            <img src="/fox.png" className={styles.fox} alt="" />

            <div className={styles.info}>
                <h1>Ваш телефон</h1>
                <p>Введите ваш телефон и получите смс код для подтверждения</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (___) ___-__-__"
                        className={styles.input}
                        maxLength="11"
                    />
                    <button type="submit" className={styles.button}>
                        <img src="/arrowWh.svg" alt="Отправить" />
                    </button>
                </form>
            </div>
        </div>
    )
}