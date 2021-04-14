import { ILevel } from "./levels";

export const LEVEL4: ILevel = {
  description: (
    <>
      <p>
        The <code>*</code> and <code>?</code> are not the only repetition meta characters in <b>regex</b>.
        We are also able to use <code>+</code>, which in a similar vein matches one or more repetitions of the preciding character, but requires it to exists.
      </p>
      <p>
        The repetition meta characters can match not only the preciding character but also a group of characters.
        To create a group of characters you can use parenthesis <code>(xyz)</code> to describe a group of characters, or a sub regex.
      </p>
      <p>
        You can use also the pipe character (<code>|</code>) to define alternation. Alternation is like an OR statement between multiple expressions.
        You could use it inside of a grouping to match one or other options, so <code>10 (a|p)m</code> would match both <code>10 am</code> and <code>10 pm</code>.
      </p>
      <p>
        For example, this <b>regex</b> <code>.+@(gmail|fastmail).com</code> would match both <code>test@gmail.com</code> and <code>test@fastmail.com</code>, but not <code>@gmail.com</code> or <code>test@hotmail.com</code>.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'banana@gmail.com',
      isRight: true,
    }, {
      text: 'jararaca@mymail.com',
      isRight: true,
    }, {
      text: 'bananaland@gmail.com',
    }, {
      text: 'paranoia@mymail.com',
    }, {
      text: 'tomato@gmail.com',
    },
  ],
  solution: '(.a)+@(gmail|mymail).com',
};
