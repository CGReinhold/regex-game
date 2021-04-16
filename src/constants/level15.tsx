import { ILevel } from "./levels";

export const LEVEL15: ILevel = {
  description: (
    <>
      <p>
        Just like the lookbehind, lookahead also has its negative alternative by replacing the equal sign by a interrogation mark (<code>(?!)</code>)
      </p>
      <p>
        You could use this <b>regex</b> <code>\d{2}(?! (p|a)m)</code> to only match pair of numbers that don't come before <code>am</code> or <code>pm</code>
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: '7 dl',
    }, {
      text: '5 l',
    }, {
      text: '9 ml',
    }, {
      text: '22 kb',
      isRight: true,
    }, {
      text: '10 km',
      isRight: true,
    },
  ],
  solution: '\\d+(?! \\w?l)',
  shouldInclude: ['?!'],
  isNotPerfectMatch: true,
};
