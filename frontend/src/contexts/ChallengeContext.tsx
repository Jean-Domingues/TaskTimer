import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie'

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}
interface ChallengesContextData {
  level: number;
  xpToNextLevel: number;
  currentXp: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  setOpenModalLevelUp: (isOpened: boolean)=> void;
  resetChallenge: () => void;
  levelUp: () => void;
  completedChallenge: () => void;
  startNewChallenge: () => void;
}
interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentXp: number;
  challengesCompleted: number;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentXp, setCurrentXp] = useState(rest.currentXp ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [openModalLevelUp, setOpenModalLevelUp] = useState(false);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(()=>{
    Notification.requestPermission()
  }, []);

  useEffect(()=>{
    Cookies.set('level', String(level))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    Cookies.set('currentXp', String(currentXp))
  }, [level, currentXp, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    new Audio('/levelUp.mp3').play()
    setOpenModalLevelUp(true)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play()

    if(Notification.permission === 'granted') {
      new Notification('Ciclo completo!', {
        body: `Novo desafio disponível 🎉 \nValendo ${challenge.amount} xp!`,
        icon: '/favicon.png' 
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalXp = currentXp + amount;

    if (finalXp >= xpToNextLevel) {
      finalXp = finalXp - xpToNextLevel;
      levelUp();
    }

    setCurrentXp(finalXp);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXp,
        challengesCompleted,
        xpToNextLevel,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        levelUp,
        completedChallenge,
        setOpenModalLevelUp
      }}
    >
      { openModalLevelUp && <LevelUpModal /> }
      {children}
    </ChallengesContext.Provider>
  );
}
