import React, { useEffect, useState } from 'react';
import { useLevel } from '../hooks/useLevel';
import './instructions.css';

interface LevelInstructionsProps {
  level: number;
  onSubmit(regex: string): void;
  onNextLevel(newLevel: number): void;
}

const LevelInstructions: React.FC<LevelInstructionsProps> = ({ level, onSubmit, onNextLevel }) => {
  const [regex, setRegex] = useState<string>('');
  const { description } = useLevel(level);
  
  const handleRegexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegex(event.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(regex);
  };

  useEffect(() => {
    setRegex('');
  }, [level]);

  return (
    <div className="instructions">
      <h3>Regex Game</h3>
      <div>
        {description}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="regex" value={regex} onChange={handleRegexChange} />
        <button type="submit">Try!</button>
      </form>
    </div>
  );
}

export default LevelInstructions;
