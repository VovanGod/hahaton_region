import styles from "./nav.module.scss";


export default function Nav({activeTab = 1}) {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="/account">
                    {
                        activeTab === 1 ? <img src="/nav/home.svg" alt="" className={styles.nav} /> : <img src="/nav/homeWh.svg" alt="" className={styles.nav} />}
                        <p>Главная</p>
                    </a>
                </li>
                <li>
                    <a href="/goals">
                    {
                        activeTab === 2 ? <img src="/nav/goalsAct.svg" alt="" className={styles.nav} /> : <img src="/nav/goals.svg" alt="" className={styles.nav} />}
                        <p>Цели</p>
                    </a>
                </li>
                <li>
                    <a href="/ai" className={styles.ai}>
                         <img src="/nav/ai.svg" alt="" className={styles.nav} />
                    </a>
                </li>
                <li>
                    <a href="/work">
                    {
                        activeTab === 3 ? <img src="/nav/workAct.svg" alt="" className={styles.nav} /> : <img src="/nav/work.svg" alt="" className={styles.nav} />}
                        <p>Задания</p>
                    </a>
                </li>
                <li>
                    <a href="/gift">
                        {   activeTab === 4 ? <img src="/nav/giftAct.svg" alt="" className={styles.nav} /> : <img src="/nav/gift.svg" alt="" className={styles.nav} />}
                        <p>Бонусы</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}