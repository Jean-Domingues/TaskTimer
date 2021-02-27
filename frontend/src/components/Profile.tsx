import styles from '../styles/pages/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Jean-Domingues.png" alt="Jean Domingues"/>
      
      <div>
        <strong>Jean Domingues</strong>
          <p>
          <img src="icons/level.svg" alt="Level"/>
            Level 1
          </p>
      </div>
    </div>
  );
}