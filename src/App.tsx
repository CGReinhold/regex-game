import React, { useState } from 'react';
import './App.css';
import GameLayout from './components/gameLayout';
import LevelInstructions from './components/instructions';
import { LEVELS } from './constants/levels';
import { useLevel } from './hooks/useLevel';
import { match } from './utils/regex';

const LAST_LEVEL = LEVELS.length;

const App = () => {
  const [level, setLevel] = useState<number>(0);
  const [regex, setRegex] = useState<string>('');
  const [resultShouldInclude, setResultShouldInclude] = useState<boolean>(false);
  const { items, isNotPerfectMatch, shouldInclude } = useLevel(level);

  const handleRegexSubmit = (regex: string) => {
    setRegex(regex);
    setResultShouldInclude(false);

    const rightTexts = items.filter(item => item.isRight)?.map(item => item.text);
    const rightCount = items.filter(item => match(regex, item.text, isNotPerfectMatch)).length;
    const isRegexRight = rightTexts.every(text =>  match(regex, text, isNotPerfectMatch)) && rightCount === rightTexts.length;

    if (isRegexRight) {
      const includesRequiredValues = !shouldInclude || shouldInclude.every(char => regex.includes(char));
      if (level < LAST_LEVEL && includesRequiredValues) {
        setTimeout(() => {
          setLevel(current => current + 1);
        }, 10)
      } else {
        setResultShouldInclude(true);
      }
    }
  }

  return (
    <div className="game">
      <div className="box instruction-box">
        <LevelInstructions
          level={level}
          resultShouldInclude={resultShouldInclude}
          onSubmit={handleRegexSubmit}
          onChangeLevel={setLevel}
        />
      </div>
      <div className="box game-box">
        <GameLayout level={level} regex={regex} />
      </div>
    </div>
  );
}

export default App;
