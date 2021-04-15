import { ILevel } from "./levels";

export const LEVEL7: ILevel = {
  description: (
    <>
      <p>
        Sometimes you may want to create a regex that need to match any of the meta characters.
        In this cases you might want to use <code>\</code>. With it it will escape the next character, allowing you to match reserved characters
      </p>
      <p>
        As an example, you could use the <code>[a-zA-Z]+\.</code> <b>regex</b> to match words with a period at the end.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: '20/20',
    }, {
      text: '10+20',
      isRight: true,
    }, {
      text: '10:20',
    }, {
      text: '11-21',
    }, {
      text: '24/7',
    },
  ],
  solution: '[0-9]+\\+[0-9]+',
  shouldInclude: ['\\'],
};
