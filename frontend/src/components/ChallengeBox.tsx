import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const contextData = useContext(ChallengesContext)

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
    {
      hasActiveChallenge ? (
        <div className={styles.active}>
          <header>Ganhe 400 xp</header>
          
          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Caminhe por 3 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>Falhei</button>
            <button type="button" className={styles.challengeCompletedButton}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios
        </p>
      </div>
      )
    }
    </div> 
  );
}
