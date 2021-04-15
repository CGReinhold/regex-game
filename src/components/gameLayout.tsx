import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import './gameLayout.css'
import character from '../assets/character.png'
import footprint from '../assets/footprint.png'
import cash from '../assets/cash.png'
import { LEVELS } from '../constants/levels';
import { match } from '../utils/regex';

interface GameLayoutProps {
  level: number;
  regex: string;
}

const GameLayout: React.FC<GameLayoutProps> = ({ level, regex }) => {
  const getLeftPosition = useCallback(() => {
    if (level === 0) return `calc(40%)`;
    const horizontalIndex = level === 0 ? 0 : LEVELS[level - 1].items.findIndex(item => item.isRight);
    return `calc(${20 * horizontalIndex}%)`;
  }, [level]);

  const [top, setTop] = useState<string>(`calc(10% - ${(level) * 259}px + 60px)`);
  const [left, setLeft] = useState<string>(getLeftPosition());
  const [newLevel, setNewLevel] = useState<boolean>(false);
  const [faceRight, setFaceRight] = useState<boolean>(true);

  useEffect(() => {
    setTop(`calc(10% - ${(level) * 259}px + 60px)`);
    setLeft(getLeftPosition());
    setNewLevel(true);
    const previousRightIndex = level === 0 ? 0 : LEVELS[level - 1].items.findIndex(i => i.isRight);
    const currentRightIndex = level === LEVELS.length ? 0 : LEVELS[level].items.findIndex(i => i.isRight);
    setTimeout(() => {
      setFaceRight(currentRightIndex > previousRightIndex);
    }, 3000);
  }, [level, getLeftPosition]);

  useEffect(() => {
    setNewLevel(false);
  }, [regex]);

  const characterClass = classNames('regex-character', { 'face-left': !faceRight });

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

                    <div className="regex-footprint">
                      {item.isRight && (
                        <img src={footprint} alt="footprint" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="last-platform">
          {level === LEVELS.length && (
            <div className="cash">
              <img src={cash} alt="cash" />
            </div>
          )}
          <div className="regex-floor"></div>
        </div>
      </div>

      {level === LEVELS.length && (
        <span className="win-label">You won!</span>
      )}

      <div className={characterClass} style={{ left }}>
        <img src={character} alt="character" />
      </div>
    </div>
  );
}

export default GameLayout;
