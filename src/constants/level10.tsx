import { ILevel } from "./levels";

export const LEVEL10: ILevel = {
  description: (
    <>
      <p>
        Similarly to <code>\w</code>, we can also use the <code>\d</code> shorthand character set to match only digits (<code>[0-9]</code>).
        In the same sense, it's uppercase version, <code>\D</code> will match everything that is <b>not</b> a digit.
      </p>
      <p>
        For example, <code>{'\\D+\\D{3}'}</code> would match a set of non digits followed by three digits, like <code>ABC-123</code>
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'Required*',
    }, {
      text: 'test@regex.com',
    }, {
      text: '@regex',
    }, {
      text: '$500',
      isRight: true,
    }, {
      text: '100%',
      isRight: true,
    },
  ],
  solution: '\\D?\\d+\\D?',
  shouldInclude: ['\\d'],
};
