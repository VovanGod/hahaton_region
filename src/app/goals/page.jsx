'use client'
import { useState } from "react";
import Nav from "../components/nav/Nav";
import styles from "./goals.module.scss";

export default function Goals() {
    const [activeTab, setActiveTab] = useState("active");

    return (
        <div className={styles.goals}>
            <div className={styles.balanceCard}>
                <div className={styles.gradientBg}></div>
                <div className={styles.balanceContent}>
                    <div className={styles.balanceInfo}>
                        <div className={styles.balance}>1 000 ₽</div>
                        <div className={styles.interestRate}>
                            <span className={styles.label}>Процентная ставка</span>
                            <span className={styles.rate}>10%</span>
                        </div>
                        <div className={styles.actionButtons}>
                            <button className={styles.addButton}>
                                <img src="/goals/add.svg" alt="" />
                            </button>
                            <button className={styles.moreButton}>
                                <img src="/goals/more.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <img src="/goals/bear.svg" alt="" className={styles.bear} />
                </div>
            </div>

            <div className={styles.goalCard}>
                <img src="/goals/labubu.svg" alt="" className={styles.rabbit} />
                <div className={styles.goalInfo}>
                    <div className={styles.label}>Твоя цель</div>
                    <div className={styles.goalName}>
                        <div className={styles.name}>Поп Март Лабубу</div>
                        <button className={styles.editButton}>✏️</button>
                    </div>
                    <div className={styles.progress}>
                        <div className={styles.percentage}>10%</div>
                        <div className={styles.remaining}>осталось еще 9 000</div>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                    </div>
                </div>
            </div>

            <div className={styles.achievements}>
                <h2>АЧИВКИ</h2>
                
                <div className={styles.tabs}>
                    <button 
                        className={`${styles.tab} ${activeTab === "active" ? styles.active : ""}`}
                        onClick={() => setActiveTab("active")}
                    >
                        Активные
                    </button>
                    <button 
                        className={`${styles.tab} ${activeTab === "completed" ? styles.active : ""}`}
                        onClick={() => setActiveTab("completed")}
                    >
                        Выполненные
                    </button>
                </div>

                <div className={styles.achievementList}>
                    {activeTab === "active" ? (
                        <>
                            <div className={styles.achievement}>
                                <img src="/tasks/money.svg" alt="" className={styles.icon} />
                                <div className={styles.content}>
                                    <div className={styles.description}>Накопить 2 000 ₽</div>
                                    <div className={styles.reward}>
                                        20 <img src="/home/coin.svg" alt="" className={styles.coin} />
                                    </div>
                                </div>
                                <button className={styles.button}>Выполняется..</button>
                            </div>

                            <div className={styles.achievement}>
                                <img src="/tasks/money.svg" alt="" className={styles.icon} />
                                <div className={styles.content}>
                                    <div className={styles.description}>Накопить 3 000 ₽</div>
                                    <div className={styles.reward}>
                                        30 <img src="/home/coin.svg" alt="" className={styles.coin} />
                                    </div>
                                </div>
                                <button className={styles.button}>Выполняется..</button>
                            </div>

                            <div className={styles.achievement}>
                                <img src="/tasks/money.svg" alt="" className={styles.icon} />
                                <div className={styles.content}>
                                    <div className={styles.description}>Накопить 4 000 ₽</div>
                                    <div className={styles.reward}>
                                        40 <img src="/home/coin.svg" alt="" className={styles.coin} />
                                    </div>
                                </div>
                                <button className={styles.button}>Выполняется..</button>
                            </div>

                            <div className={styles.achievement}>
                                <img src="/tasks/money.svg" alt="" className={styles.icon} />
                                <div className={styles.content}>
                                    <div className={styles.description}>Накопить 5 000 ₽</div>
                                    <div className={styles.reward}>
                                        50 <img src="/home/coin.svg" alt="" className={styles.coin} />
                                    </div>
                                </div>
                                <button className={styles.button}>Выполняется..</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.achievement}>
                                <img src="/tasks/money.svg" alt="" className={styles.icon} />
                                <div className={styles.content}>
                                    <div className={styles.description}>Накопить 1 000 ₽</div>
                                    <div className={styles.reward}>
                                        10 <img src="/home/coin.svg" alt="" className={styles.coin} />
                                    </div>
                                </div>
                                <button className={`${styles.button} ${styles.completed}`}>✓ Выполнено</button>
                            </div>

                            <div className={styles.achievement}>
                                <img src="/tasks/money.svg" alt="" className={styles.icon} />
                                <div className={styles.content}>
                                    <div className={styles.description}>Открыть первый счёт</div>
                                    <div className={styles.reward}>
                                        15 <img src="/home/coin.svg" alt="" className={styles.coin} />
                                    </div>
                                </div>
                                <button className={`${styles.button} ${styles.completed}`}>✓ Выполнено</button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Nav activeTab={2}/>
        </div>
    )
}