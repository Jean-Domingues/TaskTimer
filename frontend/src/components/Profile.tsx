import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/pages/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Jean-Domingues.png" alt="Jean Domingues"/>
      
      <div>
        <strong>Jean Domingues</strong>
          <p>
          <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
      </div>
    </div>
  );
}