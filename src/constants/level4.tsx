import { ILevel } from "./levels";

export const LEVEL4: ILevel = {
  description: <span>Test</span>,
  items: [
    {
      text: 'banana',
      isRight: true,
    }, {
      text: 'jararaca',
      isRight: true,
    }, {
      text: 'bananaland',
    }, {
      text: 'paranoia',
    }, {
      text: 'tomato',
    },
  ],
  solution: '(.a)+',
};
