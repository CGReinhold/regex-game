import { ILevel } from "./levels";

export const LEVEL9: ILevel = {
  description: (
    <>
      <p>
        <b>Regex</b> has also some shorthand character sets that can facilitate your use in more complex queries.
        One of the most used shorthands is <code>\w</code>, which matches any alphanumeric character. It would be the equivalent to <code>[a-zA-Z0-9_]</code>.
      </p>
      <p>
        In a similar vein, the <code>\W</code> shorthand (with the uppercase W) will match all characters that are <b>not</b> alphanumerics.
      </p>
      <p>
        For example, <code>{'\\w{2}\\W{2}'}</code> would match two alphanumeric characters followed by two non alphanumerics, like <code>ab$*</code>
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that matches all the pieces blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'Required*',
    }, {
      text: '$500',
      isRight: true,
    }, {
      text: '@regex',
      isRight: true,
    }, {
      text: '100%',
    }, {
      text: 'test@regex.com',
    },
  ],
  solution: '\\W+\\w+',
  shouldInclude: ['\\w'],
};
