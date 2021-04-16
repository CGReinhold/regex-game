import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { isMobile } from "react-device-detect";
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
  const { description, solution, isNotPerfectMatch } = useLevel(level);
  
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
    onSubmit('');
    onChangeLevel(level + 1);
  }

  const handlePrevious = () => {
    onSubmit('');
    onChangeLevel(level - 1);
  }

  useEffect(() => {
    setRegex('');
  }, [level]);

  return (
    <div className="instructions">
      <h1>Regex Mistery</h1>
      <div>
        {isMobile && (
          <p className="mobile">
            This app may not work properly in mobile devices. Try playing it on desktop for a better experience.
          </p>
        )}
        {description ? (
          <>
            {description}
            <p className="info">Be aware that there may be many different solutions for this. Try to use something you learned on this level.</p>
          </>
        ) : (
          <>
            <p>Congratulations, you finished the regex game!</p>
            <p>The regex journey doesn't end here. Regex also has different types of flags that can run queries in different ways and I'd definitely recommend to take a further look on how they work.</p>
            <p>You can find further info on <a href="https://github.com/ziishaned/learn-regex" target="_blank" rel="noreferrer">this repository</a> in which I was heavily inspired.</p>
          </>
        )}
        {resultShouldInclude && (
          <p className="try-again">
            You found a perfect solution, but try using something you learned on this level instead.
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classNames('input', { exact: !isNotPerfectMatch})}>
          <input type="text" placeholder="Your regex..." value={regex} onChange={handleRegexChange} />
        </div>
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
      <div className="links">
        <a href="https://cgreinhold.dev">cgreinhold.dev</a>
        •
        <a href="https://github.com/CGReinhold/regex-game">Github</a>
      </div>
    </div>
  );
}

export default LevelInstructions;
