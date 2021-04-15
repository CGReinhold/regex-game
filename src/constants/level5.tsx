import { ILevel } from "./levels";

export const LEVEL5: ILevel = {
  description: (
    <>
      <p>
        Another very common <b>regex</b> meta character is the character sets used with brackets (<code>[]</code>).
        Similar to capture groups, character sets are used to match any on the single character inside it. You can also use a hyphen inside a character set to specify the characters' range.
      </p>
      <p>
        You can use this <b>regex</b> <code>[Rr]egex is cool</code> to match both <code>Regex is cool</code> and <code>regex is cool</code>.
        You could also create a range of lowercase charactes using <code>[a-z]+</code> to match a word, or <code>[a-zA-Z0-9]+</code> to match any group of upper and lowercase letters or digits.
      </p>
      <p>
        One singularity of character sets is that periods (<code>.</code>) inside it means the literal period, and not the regex meta character.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'GD3-53G',
    }, {
      text: 'TAS-99B',
    }, {
      text: 'REG-345',
      isRight: true,
    }, {
      text: '8OO-123',
    }, {
      text: 'BBBB-789',
    },
  ],
  solution: '[A-Z]{3}-[0-9]{3}',
  shouldInclude: ['[', ']'],
};
