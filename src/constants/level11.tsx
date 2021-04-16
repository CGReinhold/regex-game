import { ILevel } from "./levels";

export const LEVEL11: ILevel = {
  description: (
    <>
      <p>
        The third <b>regex</b> shorthand is <code>\s</code>, which is used to match whitespace characters (<code>{'[\\t\\n\\f\\r\\p{Z}]'}</code>) in the input string.
        It will match tabs, spaces and new lines for example.
      </p>
      <p>
        It also has it's uppercase version <code>\S</code> which will match any <b>non</b>-whitespace character.
      </p>
      <p>
        For example, <code>{'\\S+@email.com'}</code> would only match strings starting with a set of non-whitespace characters and ending with <code>@email.com</code>.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that matches the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: '20% discount',
      isRight: true,
    }, {
      text: 'U$5.000',
    }, {
      text: '5 * 2 = 10',
    }, {
      text: '20%',
    }, {
      text: '10:20 a m',
    },
  ],
  solution: '\\S+\\s\\S+',
  shouldInclude: ['\\s'],
};
