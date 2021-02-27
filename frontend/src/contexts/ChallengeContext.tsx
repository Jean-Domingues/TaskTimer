import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
  level: number;
  currentXp: number;
  challengesCompleted: number;
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

  function startNewChallenge() {
    console.log('Novo desafio');
  }

  return (
    <ChallengesContext.Provider
      value={{ level, currentXp, challengesCompleted, startNewChallenge }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
