import React from 'react';
import { ILevel, LEVELS } from "../constants/levels";

export const useLevel = (level: number): ILevel => {
  return LEVELS[level] || { description: undefined, items: [] };
};
