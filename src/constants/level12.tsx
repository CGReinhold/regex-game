import { ILevel } from "./levels";

export const LEVEL12: ILevel = {
  description: (
    <>
      <p>
        Lookarounds are some kind of specific types of <b>non-capturing groups</b> used to match patterns that may be before or after certain pattern without including it.
      </p>
      <p>
        One example of it is the positive lookbehind (<code>{'(?<=)'}</code>) which could be used like <code>{'(?<=\\$)[0-9\\.]*'}</code> to match only number following a dollar sign.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'Result: abc',
    }, {
      text: 'values: 123',
    }, {
      text: 'Result: 123',
      isRight: true,
    }, {
      text: '123 is the result',
    }, {
      text: ':123',
    },
  ],
  solution: '(?<=Result: )\\d+',
  shouldInclude: ['?<='],
  isNotPerfectMatch: true,
};
