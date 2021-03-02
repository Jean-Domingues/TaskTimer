import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const {
    isActive,
    minutes,
    seconds,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  // caso a nossa string não tenha caractere a esquerda, o padStart irá preencher com '0'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.counterButton}>
          Ciclo encerrado...
          <div></div>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.counterButton} ${styles.counterButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.counterButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
