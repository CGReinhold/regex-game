import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './gameLayout.css'
import character from '../assets/character.png'
import ladder from '../assets/ladder.png'
import { LEVELS } from '../constants/levels';

interface GameLayoutProps {
  level: number;
  regex: string;
}

const GameLayout: React.FC<GameLayoutProps> = ({ level, regex }) => {
  const [top, setTop] = useState<string>(`calc(50% - ${(level) * 150}px)`);
  const [left, setLeft] = useState<string>(`calc(40%)`);
  const [newLevel, setNewLevel] = useState<boolean>(false);

  useEffect(() => {
    if (level > 0) {
      setTop(`calc(50% - ${(level) * 165}px)`);
      const horizontalIndex = LEVELS[level - 1].items.findIndex(item => item.isRight);
      setLeft(`calc(${20 * horizontalIndex}%)`);
      setNewLevel(true);
    }
  }, [level]);

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
                const isMatch = regex && RegExp(`^${regex}$`).test(item.text);
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
      </div>

      <div className="regex-character" style={{ left }}>
        <img src={character} alt="character" />
      </div>
    </div>
  );
}

export default GameLayout;
