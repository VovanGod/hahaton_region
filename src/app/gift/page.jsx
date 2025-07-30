import Nav from "../components/nav/Nav";
import styles from "./gift.module.scss";

export default function Gift() {
    return (
        <div className={styles.gift}>

            <a href="#" className={styles.circle}></a>

            <div className={styles.have}>
                <div className={styles.main}>
                    Повышенный кешбек в августе
                    <span>
                        <img src="/arrowWh.svg" alt="" />
                    </span>
                    <img src="/home/coin.svg" className={styles.coin} alt="" />
                </div>
                <div className={styles.card}>
                    Кешбек до 3% на развлечения и детские товары
                    <div className={styles.company}></div>
                    <img src="/home/coin.svg" className={styles.coin} alt="" />
                </div>
                <div className={styles.card}>
                    Кешбек на услуги в рамках промоакции
                    <div className={styles.company}></div>
                    <img src="/home/coin.svg" className={styles.coin} alt="" />
                </div>
            </div>

                           
                <h2>Покупка за ИнвестКоины</h2>
                <div className={styles.buyList}>

                    <div className={styles.card}>
                        <img src="/gift/kidburg.svg" alt="" />
                        <div className={styles.info}>
                            <h3>Скидка на покупку входного билета в Кидбург</h3>
                            <p>Скидка до 20% и повышеный кэшбек на стандартный входной билет</p>
                            <button className={styles.buyButton}>
                                Купить за 2000
                                <img src="/home/coin.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/gift/dodo.svg" alt="" />
                        <div className={styles.info}>
                            <h3>Бесплатная додстер или денвич в Додо Пицца</h3>
                            <p>Получите бесплатный додстер или денвич в Додо Пицца за выполнение заданий и накопление ИнвестКоинов</p>
                            <button className={styles.buyButton}>
                                Купить за 10000
                                <img src="/home/coin.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/gift/interneturok.svg" alt="" />
                        <div className={styles.info}>
                            <h3>Бесплатный урок и план обучения в ИнтернетУрок</h3>
                            <p>Бесплатный урок на платформе по любому предмету на выбор</p>
                            <button className={styles.buyButton}>
                                Купить за 2000
                                <img src="/home/coin.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/gift/kidburg.svg" alt="" />
                        <div className={styles.info}>
                            <h3>Скидка на покупку входного билета в Кидбург</h3>
                            <p>Скидка до 20% и повышеный кэшбек на стандартный входной билет</p>
                            <button className={styles.buyButton}>
                                Купить за 2000
                                <img src="/home/coin.svg" alt="" />
                            </button>
                        </div>
                    </div>

                </div>

            <img src="/Ellipse 1.png" className={styles.ellipse} alt="" />
            <img src="/Ellipse 2.png" className={styles.ellipse2} alt="" />  
            <Nav activeTab={4}/>
        </div>
    )
}