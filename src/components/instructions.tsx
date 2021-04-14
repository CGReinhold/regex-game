import React, { useEffect, useState } from 'react';
import { LEVELS } from '../constants/levels';
import { useLevel } from '../hooks/useLevel';
import './instructions.css';

interface LevelInstructionsProps {
  level: number;
  onSubmit(regex: string): void;
  onChangeLevel(newLevel: number): void;
}

const LevelInstructions: React.FC<LevelInstructionsProps> = ({ level, onSubmit, onChangeLevel }) => {
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
      <h3>Regex Game</h3>
      <div>
        {description ? (
          <>
            {description}
            <p className="info">Be aware that there may be many different solutions for this. Try to use something you learned on this level.</p>
          </>
        ) : (
          <p>Congratulations, you finished the regex game!</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your regex" value={regex} onChange={handleRegexChange} />
        <div className="buttons">
          <button disabled={level <= 0} className="change-level" type="button" onClick={handlePrevious}>‹</button>
          <button className="submit" type="submit">Try!</button>
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
