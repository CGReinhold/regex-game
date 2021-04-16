import { ILevel } from "./levels";

export const LEVEL13: ILevel = {
  description: (
    <>
      <p>
        The positive lookbehind has also a negation alternative which can be used replacing the equal sign to the exclamation sign <code>{'(?<!)'}</code>.
      </p>
      <p>
        This expression will match values not starting with a certain pattern, so if we use this <b>regex</b> <code>{'(?<!\\Name: )[0-9\\.]+'}</code> it will only match digits that don't have a preceding <code>Name: </code> label.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'R$1',
    }, {
      text: '$5',
    }, {
      text: 'only $1',
    }, {
      text: '$$$',
    }, {
      text: '2000$',
      isRight: true,
    },
  ],
  solution: '(?<!\\$)\\d+',
  shouldInclude: ['?<!'],
  isNotPerfectMatch: true,
};
