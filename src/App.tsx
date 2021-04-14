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
  const { items, isNotPerfectMatch } = useLevel(level);

  const handleRegexSubmit = (regex: string) => {
    setRegex(regex);

    const rightTexts = items.filter(item => item.isRight)?.map(item => item.text);
    const rightCount = items.filter(item => match(regex, item.text, isNotPerfectMatch)).length;
    const isRegexRight = rightTexts.filter(text =>  match(regex, text, isNotPerfectMatch)).length === rightTexts.length && rightCount === rightTexts.length;

    if (isRegexRight) {
      if (level < LAST_LEVEL) {
        setTimeout(() => {
          setLevel(current => current + 1);
        }, 10)
      }
    } else {
      //TODO: wrong regex, show animation and try again.
    }
  }

  return (
    <div className="game">
      <div className="box instruction-box">
        <LevelInstructions level={level} onSubmit={handleRegexSubmit} onChangeLevel={setLevel} />
      </div>
      <div className="box game-box">
        <GameLayout level={level} regex={regex} />
      </div>
    </div>
  );
}

export default App;
