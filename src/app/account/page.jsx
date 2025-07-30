import Nav from "../components/nav/Nav";
import styles from "./account.module.scss";
import Image from 'next/image';


export default function Home() {
    return (
        <div className={styles.account}> 
             <header className={styles.header}>
                <div className={styles.circle}></div>
                <h1 className={styles.greeting}><span>Привет</span>, Саша!</h1>
            </header>

            <div className={styles.card}>
                <img src="/home/bearBoll.svg" className={styles.bear} alt="" />
                <h2 className={styles.cardTitle}>Детская карта</h2>
                <div className={styles.balances}>
                <span className={styles.mainBalance}><span>899</span>,00 ₽</span>
                <span className={styles.bonusBalance}>
                    300 ₽
                    <img src="/home/coin.svg" alt="" />
                </span>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.actionButton}>
                <Image src="/home/qr.svg" width={32} height={32} alt="QR" />
                <span>QR</span>
                </button>
                <button className={styles.actionButton}>
                <Image src="/home/translate.svg" width={32} height={32} alt="Перевод" />
                <span>Перевод</span>
                </button>
                <button className={styles.actionButton}>
                <Image src="/home/money.svg" width={32} height={32} alt="Копить" />
                <span>Копить</span>
                </button>
                <button className={styles.actionButton}>
                <Image src="/home/more.svg" width={32} height={32} alt="больше" />
                </button>
            </div>

            <div className={styles.transferSection}>
                <div className={styles.send}>
                    Перевести <br /> деньги
                    <span>
                        <img src="/home/arrowGr.svg" alt="" />
                    </span>
                </div>
                <div className={styles.recipients}>
                    <button className={styles.recipient}>
                        <Image src="/home/friend1.svg" width={48} height={48} alt="Миша" />
                        <span>Миша</span>
                    </button>
                    <button className={styles.recipient}>
                        <Image src="/home/friend2.svg" width={48} height={48} alt="Мама" />
                        <span>Мама</span>
                    </button>
                    <button className={styles.recipient}>
                        <Image src="/home/friend2.svg" width={48} height={48} alt="Мама" />
                        <span>Мама</span>
                    </button>
                </div>
            </div>

            <div className={styles.historySection}>
                <h3 className={styles.sectionTitle}>История за июнь</h3>
                <div className={styles.list}></div>
            </div>


            <img src="/Ellipse 1.png" className={styles.ellipse} alt="" />
            <img src="/Ellipse 2.png" className={styles.ellipse2} alt="" />  
            <Nav activeTab={1}/>
        </div>
    )
}