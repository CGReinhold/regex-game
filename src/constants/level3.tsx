import { ILevel } from "./levels";

export const LEVEL3: ILevel = {
  description: (
    <>
      <p>
        Some of the other <b>regex</b> meta characters are <code>*</code> and <code>?</code>.
      </p>
      <p>
        <code>?</code> is used to match when the preciding character is optional, while <code>*</code> matches when it is optional or repeated `n` times.
      </p>
      <p>
        Both <code>test@gmail.com</code>, <code>test1@gmail.com</code> and <code>test11@gmail.com</code> matches the following <b>regex</b>: <code>test1*@gmail.com</code>, because the 1 is optional and can be repeated.
        However, only the first two match the <b>regex</b> <code>test1?@gmail.com</code>. That's because in this <b>regex</b> the number 1 can be repeated only once.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'My useful table',
    }, {
      text: 'My amazing morning',
    }, {
      text: 'My favorite sports',
    }, {
      text: 'My favorite games',
      isRight: true,
    }, {
      text: 'My game',
      isRight: true,
    },
  ],
  solution: 'My .*games?',
  shouldInclude: ['*', '?'],
};
