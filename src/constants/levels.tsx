import { LEVEL1 } from './level1';
import { LEVEL2 } from './level2';
import { LEVEL3 } from './level3';
import { LEVEL4 } from './level4';

export interface ILevelItem {
  text: string;
  isRight?: boolean;
}

export interface ILevel {
  description: JSX.Element;
  items: ILevelItem[];
  solution: string;
}

export const LEVELS: ILevel[] = [LEVEL1, LEVEL2, LEVEL3, LEVEL4];
