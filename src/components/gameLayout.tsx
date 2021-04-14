import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import './gameLayout.css'
import character from '../assets/character.png'
import ladder from '../assets/footprint.png'
import { LEVELS } from '../constants/levels';
import { match } from '../utils/regex';

interface GameLayoutProps {
  level: number;
  regex: string;
}

const GameLayout: React.FC<GameLayoutProps> = ({ level, regex }) => {
  const getLeftPosition = useCallback(() => {
    if (level === 0) return `calc(40%)`;
    const horizontalIndex = LEVELS[level - 1].items.findIndex(item => item.isRight);
    return `calc(${20 * horizontalIndex}%)`;
  }, [level]);

  const [top, setTop] = useState<string>(`calc(10% - ${(level) * 259}px + 60px)`);
  const [left, setLeft] = useState<string>(getLeftPosition());
  const [newLevel, setNewLevel] = useState<boolean>(false);

  useEffect(() => {
    if (level > 0) {
      setTop(`calc(10% - ${(level) * 259}px + 60px)`);
      setLeft(getLeftPosition());
      setNewLevel(true);
    }
  }, [level, getLeftPosition]);

  useEffect(() => {
    setNewLevel(false);
  }, [regex]);

  return (
    <div className="game-layout">
      <div className="game-platform" style={{ top }}>
        {LEVELS.map((levelInfo, index) => {
          const groupClass = classNames('item-group', { 'fade': level !== index });

          return (
            <div key={`${level}-${index}`} className={groupClass}>
              {levelInfo.items.map(item => {
                const isMatch = regex && match(regex, item.text, levelInfo.isNotPerfectMatch);
                const isLevelMatch = isMatch && level - 1 === index && newLevel;
                const isFalseMatch = isMatch && !isLevelMatch && level === index && !newLevel;
                const itemClass = classNames('regex-item', { 'is-match': isLevelMatch, 'is-false-match': isFalseMatch });

                return (
                  <div key={`${level}-${index}-${item.text}`} className="regex-column">
                    <div className={itemClass}>
                      {item.text}
                    </div>

                    <div className="regex-ladder">
                      {item.isRight && (
                        <img src={ladder} alt="ladder" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div>
          <div className="regex-floor"></div>
        </div>
      </div>

      {level === LEVELS.length && (
        <span className="win-label">You won!</span>
      )}

      <div className="regex-character" style={{ left }}>
        <img src={character} alt="character" />
      </div>
    </div>
  );
}

export default GameLayout;
