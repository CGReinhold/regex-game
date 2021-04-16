import { ILevel } from "./levels";

export const LEVEL16: ILevel = {
  description: (
    <>
      <p>
        Lastly, here is a challenge so you can practice the concepts learned during this quest.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that matches the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'my-regex+game@fun',
    }, {
      text: '@fun.com.br',
    }, {
      text: 'my-regex@game@fun.com.br',
    }, {
      text: 'my-regex.com.br',
    }, {
      text: 'my-regex+game@fun.com.br',
      isRight: true,
    },
  ],
  solution: '[\\w+-]+@\\w+(\\.\\w+)+',
};
