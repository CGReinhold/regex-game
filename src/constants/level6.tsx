import { ILevel } from "./levels";

export const LEVEL6: ILevel = {
  description: (
    <>
      <p>
        The <code>^</code> character can be used inside character sets to negate it, matching everything but those characters.
      </p>
      <p>
        For example, the <code>[^c]ar</code> <b>regex</b> will match both <code>bar</code> and <code>jar</code> but not <code>car</code>.
      </p>
      <p>
        Try to figure out what is the <b>regex</b> that would perfectly match the piece blocking the character to the next level.
      </p>
    </>
  ),
  items: [
    {
      text: 'blue led',
    }, {
      text: 'red led',
    }, {
      text: 'cozy bed',
    }, {
      text: 'green led',
    }, {
      text: 'cool red',
      isRight: true,
    },
  ],
  solution: '.+ [^lb]ed',
};
