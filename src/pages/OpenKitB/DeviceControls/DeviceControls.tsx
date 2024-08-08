import React from 'react';
import Plot from 'react-plotly.js';
import styles from "./DeviceControls.module.scss";

interface DeviceControlsProps {
    led: string;
    toggleLed: () => void;

}

const DeviceControls: React.FC<DeviceControlsProps> = ({
    led,
    toggleLed,

}) => {
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div className={styles.dashboard}>
                <div className={styles.insights}>

                    <div className={styles.insightItem}>
                        <div className={styles.insightContent}>
                            <div className={styles.left}>
                                <h3>LED</h3>
                                <div className={styles.ledContent}>
                                    <button id="toggleButton" onClick={toggleLed}>
                                        {led === 'off' ? 'Bật' : 'Tắt'}
                                    </button>
                                </div>
                            </div>
                            <div
                                className={styles.icon}
                                style={{ color: led === 'off' ? 'green' : 'red' }}
                            >
                                <i className="fas fa-lightbulb"></i>
                            </div>
                        </div>
                    </div>

                    <div className={styles.insightItem}>
                        <div className={styles.insightContent}>
                            <div className={styles.left}>
                                <h3>LED</h3>
                                <div className={styles.ledContent}>
                                    <button id="toggleButton" onClick={toggleLed}>
                                        {led === 'off' ? 'Bật' : 'Tắt'}
                                    </button>
                                </div>
                            </div>
                            <div
                                className={styles.icon}
                                style={{ color: led === 'off' ? 'green' : 'red' }}
                            >
                                <i className="fas fa-lightbulb"></i>
                            </div>
                        </div>
                    </div>

                    <div className={styles.insightItem}>
                        <div className={styles.insightContent}>
                            <div className={styles.left}>
                                <h3>LED</h3>
                                <div className={styles.ledContent}>
                                    <button id="toggleButton" onClick={toggleLed}>
                                        {led === 'off' ? 'Bật' : 'Tắt'}
                                    </button>
                                </div>
                            </div>
                            <div
                                className={styles.icon}
                                style={{ color: led === 'off' ? 'green' : 'red' }}
                            >
                                <i className="fas fa-lightbulb"></i>
                            </div>
                        </div>
                    </div>

                    <div className={styles.insightItem}>
                        <div className={styles.insightContent}>
                            <div className={styles.left}>
                                <h3>LED</h3>
                                <div className={styles.ledContent}>
                                    <button id="toggleButton" onClick={toggleLed}>
                                        {led === 'off' ? 'Bật' : 'Tắt'}
                                    </button>
                                </div>
                            </div>
                            <div
                                className={styles.icon}
                                style={{ color: led === 'off' ? 'green' : 'red' }}
                            >
                                <i className="fas fa-lightbulb"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceControls;
