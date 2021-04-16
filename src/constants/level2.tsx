import { ILevel } from "./levels";

export const LEVEL2: ILevel = {
  description: (
    <>
      <p>
        Meta characters are the building blocks of regular expressions.
        Meta characters do not stand for themselves but instead are interpreted in some special way.
        Some meta characters have a special meaning and are written inside square brackets.
      </p>
      <p>
        The <code>.</code> (period) meta character, for example, is used to match any character in a string (except a line break).
      </p>
      <p>
        Another meta characters are the braces, that are used to describe the number of repetitions of the preceding character.
        You can use <code>{'{n,m}'}</code> to find a match that has at least <b>n</b> but not more than <b>m</b> repetitions of the preceding symbol
      </p>
      <p>
        For example, the <b>regex</b> <code>{'.{3,5}'}</code> will match a sequence of three to five characters, while <code>{'.{3}'}</code> will only match sequences with three characters.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'Coding is fun',
    }, {
      text: 'ideas',
      isRight: true,
    }, {
      text: 'Walk around the world',
    }, {
      text: '911',
    }, {
      text: 'light-blue',
    },
  ],
  solution: '.{5}',
  shouldInclude: ['.', '{', '}'],
};
