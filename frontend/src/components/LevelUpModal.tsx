import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, setOpenModalLevelUp } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>
        <strong>Parabéns</strong>

        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={()=> setOpenModalLevelUp(false)}>
          <img src="icons/close.svg" alt="fechar"/>
        </button>
      </div>
    </div>
  );
}
