import { ILevel } from "./levels";

export const LEVEL8: ILevel = {
  description: (
    <>
      <p>
        You may have noticed that for each level by now you were supposed to get a perfect match.
        However, <b>regex</b> will also match substrings, so <code>Program</code> will find a match in both <code>Program</code> and <code>Programming</code> (which has the substring in it).
      </p>
      <p>
        If you want a regex that matches the starting or ending of a string, you can use the anchor meta characters <code>^</code> and <code>$</code>.
        The caret symbol <code>^</code> is used on the start of regex to check if a matching character is the first character of the input string.
        The dollar sign $ is used to check if a matching character is the last character in the string.
      </p>
      <p>
        Following this, the <code>^program$</code> will only match strings that are exactly <code>program</code> and not strings that contain it inside.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that match the piece blocking the character to the next level. Notice that this time the match may not need to be perfect.
      </p>
    </>
  ),
  items: [
    {
      text: 'Cold beer',
    }, {
      text: 'Tasty food',
    }, {
      text: 'Nice wine',
    }, {
      text: 'Cool book',
      isRight: true,
    }, {
      text: 'Cool game',
      isRight: true,
    },
  ],
  solution: '^Cool',
  isNotPerfectMatch: true,
};
