import { ILevel } from "./levels";

export const LEVEL14: ILevel = {
  description: (
    <>
      <p>
        Similarly to lookbehind, lookahead allows us to match something followed by certain pattern without including it.
        You can use it as <code>(?=)</code>.
      </p>
      <p>
        If you want, for example, to match numbers that comes before a percent sign, you could use the following <b>regex</b> <code>\d+(?=%)</code>.
        Remember that this will only match the numbers, and not the percent sign.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that matches the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: '00:00',
    }, {
      text: '12 pm',
      isRight: true,
    }, {
      text: '12 o\'clock',
    }, {
      text: 'midnight',
    }, {
      text: '12',
    },
  ],
  solution: '\\d+(?= pm)',
  shouldInclude: ['?='],
  isNotPerfectMatch: true,
};
