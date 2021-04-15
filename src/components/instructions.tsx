import React, { useEffect, useState } from 'react';
import { LEVELS } from '../constants/levels';
import { useLevel } from '../hooks/useLevel';
import './instructions.css';

interface LevelInstructionsProps {
  level: number;
  onSubmit(regex: string): void;
  onChangeLevel(newLevel: number): void;
  resultShouldInclude: boolean;
}

const LevelInstructions: React.FC<LevelInstructionsProps> = ({ level, resultShouldInclude, onSubmit, onChangeLevel }) => {
  const [regex, setRegex] = useState<string>('');
  const { description, solution } = useLevel(level);
  
  const handleRegexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegex(event.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(regex);
  };

  const handleGetAnswer = () => {
    setRegex(solution);
  };

  const handleNext = () => {
    onChangeLevel(level + 1);
  }

  const handlePrevious = () => {
    onChangeLevel(level - 1);
  }

  useEffect(() => {
    setRegex('');
  }, [level]);

  return (
    <div className="instructions">
      <h1>Regex Raid</h1>
      <div>
        {description ? (
          <>
            {description}
            <p className="info">Be aware that there may be many different solutions for this. Try to use something you learned on this level.</p>
          </>
        ) : (
          <p>Congratulations, you finished the regex game!</p>
        )}
        {resultShouldInclude && (
          <p className="try-again">
            You found a perfect solution, but try using something you learned on this level instead.
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your regex..." value={regex} onChange={handleRegexChange} />
        <div className="buttons">
          <button disabled={level <= 0} className="change-level" type="button" onClick={handlePrevious}>‹</button>
          <div className="submit">
            <button type="submit">Try!</button>
          </div>
          <button disabled={level >= LEVELS.length} className="change-level" type="button" onClick={handleNext}>›</button>
        </div>
        {description && (
          <button className="answer" type="button" onClick={handleGetAnswer}>Give me the solution!</button>
        )}
      </form>
    </div>
  );
}

export default LevelInstructions;
