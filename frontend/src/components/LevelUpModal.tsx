import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>2</header>
        <strong>Parabéns</strong>

        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={()=> {}}>
          <img src="icons/close.svg" alt="fechar"/>
        </button>
      </div>
    </div>
  );
}
