import { ILevel } from "./levels";

export const LEVEL1: ILevel = {
  description: (
    <>
      <p>
        A regular expression (regex) is just a pattern of characters that we use to perform a search within a string. They are usually used for validating forms, replace text within a string, finding a pattern on a string, and more.
        For example, the regular expression <code>the</code> means: the letter <code>t</code>, followed by the letter <code>h</code>, followed by the letter <code>e</code>.
      </p>
      <p>
        In this sense, the phrase <code>the quick brown fox jumps over the lazy dog</code> would have two matches for the <b>regex</b> <code>the</code>.
      </p>
      <p>
        The goal of this game is giving some <b>regex</b> challenges while explaining some concepts of it.
      </p>
      <p>
        To get to the next level, try to figure out which <b>regex</b> would perfectly match the piece on top of the footprints.
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
