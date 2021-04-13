import { ILevel } from "./levels";

export const LEVEL1: ILevel = {
  description: (
    <>
      <p>
        A regular expression is just a pattern of characters that we use to perform a search in a text.
        For example, the regular expression <code>the</code> means: the letter <code>t</code>, followed by the letter <code>h</code>, followed by the letter <code>e</code>.
      </p>
      <p>
        For example, the phrase <code>the quick brown fox jumps over the lazy dog</code> would have two matches for the <b>regex</b> <code>the</code>.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: '911',
    }, {
      text: 'Javascript',
    }, {
      text: 'fun@email.com',
    }, {
      text: '10:30 am',
    }, {
      text: 'regex',
      isRight: true,
    },
  ],
  solution: 'regex',
};
