import { createContext, ReactNode, useState } from 'react';

import challenges from '../../challenges.json';

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
  resetChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
}
interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXp, setCurrentXp] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  
  const [activeChallenge, setActiveChallenge] = useState(null);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2)
  
  function levelUp() {
    console.log('up');
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null)
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
        levelUp
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
