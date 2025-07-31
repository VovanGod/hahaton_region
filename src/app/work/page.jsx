'use client'
import { useState } from "react";
import Nav from "../components/nav/Nav";
import styles from "./work.module.scss";
import TaskConfirmModal from "../components/Modal/TaskConfirmModal";

const initialTasks = [
    { name: "Заправить кровать", reward: 20, status: "active" },
    { name: "Почистить зубы", reward: 30, status: "active" },
    { name: "Помощь по дому", reward: 40, status: "active" },
    { name: "Собрать вещи на завтра", reward: 50, status: "active" },
];

const completedTasks = [
    { name: "Убрать игрушки", reward: 25, status: "completed" },
    { name: "Почитать книгу", reward: 35, status: "completed" },
    { name: "Сделать зарядку", reward: 45, status: "completed" },
];

export default function Work() {
    const [tasks, setTasks] = useState(initialTasks);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTaskIdx, setSelectedTaskIdx] = useState(null);
    const [activeTab, setActiveTab] = useState("active");

    const handleTaskClick = (idx) => {
        setSelectedTaskIdx(idx);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedTaskIdx(null);
    };

    const handleTaskConfirm = () => {
        setTasks(tasks => tasks.map((t, i) =>
            i === selectedTaskIdx ? { ...t, status: "pending" } : t
        ));
        setModalOpen(false);
        setSelectedTaskIdx(null);
    };

    const currentTasks = activeTab === "active" ? tasks : completedTasks;

    return (
        <div className={styles.work}>
            <div className={styles.gradient}></div>
            
            <div className={styles.header}>
                <div className={styles.circle}></div>
                <h1>Задания</h1>
                <p className={styles.subtitle}>Ежедневные отметки</p>
            </div>

            <div className={styles.dailyMarks}>
                <div className={styles.calendar}>
                    <div className={styles.day}>
                        <img src="/tasks/paw.svg" alt="" className={styles.paw} />
                    </div>
                    <div className={styles.day}>
                        <img src="/tasks/paw.svg" alt="" className={styles.paw} />
                    </div>
                    <div className={styles.day}>
                        <img src="/tasks/paw.svg" alt="" className={styles.paw} />
                    </div>
                    <div className={styles.day}><div className={styles.date}>4</div></div>
                    <div className={styles.day}><div className={styles.date}>5</div></div>
                    <div className={styles.day}><div className={styles.date}>6</div></div>
                    <div className={styles.day}><div className={styles.date}>7</div></div>
                    <div className={styles.day}><div className={styles.date}>8</div></div>
                    <div className={styles.day}><div className={styles.date}>9</div></div>
                    <div className={styles.day}>
                        <div className={styles.date}>10</div>
                        <img src="/home/coin.svg" alt="" className={styles.coin} />
                    </div>
                    <div className={styles.day}><div className={styles.date}>11</div></div>
                    <div className={styles.day}><div className={styles.date}>12</div></div>
                    <div className={styles.day}><div className={styles.date}>13</div></div>
                    <div className={styles.day}><div className={styles.date}>14</div></div>
                    <div className={styles.day}><div className={styles.date}>15</div></div>
                    <div className={styles.day}><div className={styles.date}>16</div></div>
                    <div className={styles.day}><div className={styles.date}>17</div></div>
                    <div className={styles.day}><div className={styles.date}>18</div></div>
                    <div className={styles.day}><div className={styles.date}>19</div></div>
                    <div className={styles.day}>
                        <div className={styles.date}>20</div>
                        <img src="/home/coin.svg" alt="" className={styles.coin} />
                    </div>
                    <div className={styles.day}><div className={styles.date}>21</div></div>
                    <div className={styles.day}><div className={styles.date}>22</div></div>
                    <div className={styles.day}><div className={styles.date}>23</div></div>
                    <div className={styles.day}><div className={styles.date}>24</div></div>
                    <div className={styles.day}><div className={styles.date}>25</div></div>
                    <div className={styles.day}><div className={styles.date}>26</div></div>
                    <div className={styles.day}><div className={styles.date}>27</div></div>
                    <div className={styles.day}><div className={styles.date}>28</div></div>
                    <div className={styles.day}><div className={styles.date}>29</div></div>
                    <div className={styles.day}>
                        <div className={styles.date}>30</div>
                        <img src="/home/coin.svg" alt="" className={styles.coin} />
                    </div>
                </div>
            </div>

            <div className={styles.dailyTasks}>
                <h2>Ежедневные задания</h2>
                
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

                <div className={styles.taskList}>
                    {currentTasks.map((task, idx) => (
                        <div 
                            className={`${styles.task} ${task.status === "completed" ? styles.completed : ""}`} 
                            key={task.name}
                        >
                            <img src="/tasks/money.svg" alt="" className={styles.icon} />
                            <div className={styles.content}>
                                <div className={styles.taskName}>{task.name}</div>
                                <div className={styles.reward}>
                                    {task.reward} <img src="/home/coin.svg" alt="" className={styles.coin} />
                                </div>
                            </div>
                            {task.status === "active" ? (
                                <button
                                    className={`${styles.button} ${styles.complete}`}
                                    onClick={() => handleTaskClick(idx)}
                                >
                                    Выполнить
                                </button>
                            ) : task.status === "pending" ? (
                                <button
                                    className={`${styles.button} ${styles.pending}`}
                                    disabled
                                >
                                    На проверке
                                </button>
                            ) : (
                                <button
                                    className={`${styles.button} ${styles.completed}`}
                                    disabled
                                >
                                    ✓ Выполнено
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <TaskConfirmModal
                isOpen={modalOpen}
                onClose={handleModalClose}
                onConfirm={handleTaskConfirm}
            />

            <div className={styles.weeklyTasks}>
                <h2>Недельные задания</h2>
            </div>

            <Nav activeTab={3}/>
        </div>
    )
}