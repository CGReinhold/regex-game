import { LEVEL1 } from './level1';
import { LEVEL10 } from './level10';
import { LEVEL11 } from './level11';
import { LEVEL12 } from './level12';
import { LEVEL13 } from './level13';
import { LEVEL14 } from './level14';
import { LEVEL15 } from './level15';
import { LEVEL16 } from './level16';
import { LEVEL2 } from './level2';
import { LEVEL3 } from './level3';
import { LEVEL4 } from './level4';
import { LEVEL5 } from './level5';
import { LEVEL6 } from './level6';
import { LEVEL7 } from './level7';
import { LEVEL8 } from './level8';
import { LEVEL9 } from './level9';

export interface ILevelItem {
  text: string;
  isRight?: boolean;
}

export interface ILevel {
  description: JSX.Element;
  items: ILevelItem[];
  solution: string;
  isNotPerfectMatch?: boolean;
  shouldInclude?: string[];
}

export const LEVELS: ILevel[] = [
  LEVEL1,
  LEVEL2,
  LEVEL3,
  LEVEL4,
  LEVEL5,
  LEVEL6,
  LEVEL7,
  LEVEL8,
  LEVEL9,
  LEVEL10,
  LEVEL11,
  LEVEL12,
  LEVEL13,
  LEVEL14,
  LEVEL15,
  LEVEL16,
];
