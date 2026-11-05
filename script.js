(function () {
  'use strict';

  var LEVELS = [
    {
      description: String.raw`<p>
        Uma expressão regular (regex) é apenas um padrão de caracteres que usamos para realizar uma busca dentro de uma string. Elas costumam ser usadas para validar formulários, substituir texto dentro de uma string, encontrar um padrão em uma string e muito mais.
        Por exemplo, a expressão regular <code>the</code> significa: a letra <code>t</code>, seguida da letra <code>h</code>, seguida da letra <code>e</code>.
      </p>
      <p>
        Nesse sentido, a frase <code>the quick brown fox jumps over the lazy dog</code> teria duas correspondências para a <b>regex</b> <code>the</code>.
      </p>
      <p>
        O objetivo deste jogo é propor alguns desafios de <b>regex</b> enquanto explica alguns conceitos dela.
      </p>
      <p>
        Para chegar ao próximo nível, tente descobrir qual <b>regex</b> corresponde perfeitamente à peça em cima das pegadas.
      </p>`,
      items: [
        { text: '911' },
        { text: 'Javascript' },
        { text: 'fun@email.com' },
        { text: '10:30 am' },
        { text: 'regex', isRight: true },
      ],
      solution: 'regex',
    },
    {
      description: String.raw`<p>
        Metacaracteres são os blocos de construção das expressões regulares.
        Metacaracteres não representam a si mesmos, mas são interpretados de alguma forma especial.
        Alguns metacaracteres têm um significado especial e são escritos entre colchetes.
      </p>
      <p>
        O metacaractere <code>.</code> (ponto), por exemplo, é usado para corresponder a qualquer caractere em uma string (exceto uma quebra de linha).
      </p>
      <p>
        Outros metacaracteres são as chaves, que são usadas para descrever o número de repetições do caractere anterior.
        Você pode usar <code>{n,m}</code> para encontrar uma correspondência que tenha pelo menos <b>n</b>, mas não mais que <b>m</b> repetições do símbolo anterior.
      </p>
      <p>
        Por exemplo, a <b>regex</b> <code>.{3,5}</code> corresponderá a uma sequência de três a cinco caracteres, enquanto <code>.{3}</code> corresponde apenas a sequências com três caracteres.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde perfeitamente à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'Coding is fun' },
        { text: 'ideas', isRight: true },
        { text: 'Walk around the world' },
        { text: '911' },
        { text: 'light-blue' },
      ],
      solution: '.{5}',
      shouldInclude: ['.', '{', '}'],
    },
    {
      description: String.raw`<p>
        Alguns dos outros metacaracteres de <b>regex</b> são <code>*</code> e <code>?</code>.
      </p>
      <p>
        <code>?</code> é usado para corresponder quando o caractere anterior é opcional, enquanto <code>*</code> corresponde quando ele é opcional ou repetido "n" vezes.
      </p>
      <p>
        Todos <code>test@gmail.com</code>, <code>test1@gmail.com</code> e <code>test11@gmail.com</code> correspondem à seguinte <b>regex</b>: <code>test1*@gmail.com</code>, porque o 1 é opcional e pode ser repetido muitas vezes.
        Porém, apenas os dois primeiros corresponderão à <b>regex</b> <code>test1?@gmail.com</code>. Isso porque nessa <b>regex</b> o número 1 pode ser repetido apenas uma vez.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde perfeitamente a todas as peças que bloqueiam o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'My useful table' },
        { text: 'My amazing morning' },
        { text: 'My favorite sports' },
        { text: 'My favorite games', isRight: true },
        { text: 'My game', isRight: true },
      ],
      solution: 'My .*games?',
      shouldInclude: ['*', '?'],
    },
    {
      description: String.raw`<p>
        Os <code>*</code> e <code>?</code> não são os únicos metacaracteres de repetição em <b>regex</b>.
        Também podemos usar <code>+</code>, que de forma semelhante corresponde a uma ou mais repetições do caractere anterior, mas exige que ele exista.
      </p>
      <p>
        Os metacaracteres de repetição podem corresponder não apenas ao caractere anterior, mas também a um grupo de caracteres.
        Para criar um grupo de captura de caracteres, você pode usar parênteses <code>(xyz)</code> para descrever um grupo de caracteres.
      </p>
      <p>
        Você também pode usar o caractere pipe (<code>|</code>) para definir alternância. A alternância é como uma instrução OU entre várias expressões.
        Você pode usá-la dentro de um agrupamento para corresponder a uma ou outra opção, então <code>10 (a|p)m</code> corresponderia tanto a <code>10 am</code> quanto a <code>10 pm</code>.
      </p>
      <p>
        Por exemplo, esta <b>regex</b> <code>.+@(gmail|fastmail).com</code> corresponderia tanto a <code>test@gmail.com</code> quanto a <code>test@fastmail.com</code>, mas não a <code>@gmail.com</code> ou <code>test@hotmail.com</code>.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde perfeitamente a todas as peças que bloqueiam o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'banana@gmail.com', isRight: true },
        { text: 'jararaca@mymail.com', isRight: true },
        { text: 'bananaland@gmail.com' },
        { text: 'paranoia@mymail.com' },
        { text: 'tomato@gmail.com' },
      ],
      solution: '(.a)+@(gmail|mymail).com',
      shouldInclude: ['(', ')', '+', '|'],
    },
    {
      description: String.raw`<p>
        Outro metacaractere de <b>regex</b> muito comum é o conjunto de caracteres usado com colchetes (<code>[]</code>).
        Semelhante aos grupos de captura, os conjuntos de caracteres são usados para corresponder a qualquer um dos caracteres individuais dentro dele. Você também pode usar um hífen dentro de um conjunto de caracteres para especificar o intervalo dos caracteres.
      </p>
      <p>
        Você pode usar esta <b>regex</b> <code>[Rr]egex is cool</code> para corresponder tanto a <code>Regex is cool</code> quanto a <code>regex is cool</code>.
        Você também pode criar um intervalo de caracteres minúsculos usando <code>[a-z]+</code> para corresponder a uma palavra, ou <code>[a-zA-Z0-9]+</code> para corresponder a qualquer grupo de letras maiúsculas, minúsculas ou dígitos.
      </p>
      <p>
        Uma particularidade dos conjuntos de caracteres é que pontos (<code>.</code>) dentro dele significam o ponto literal, e não o metacaractere de regex.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde perfeitamente à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'GD3-53G' },
        { text: 'TAS-99B' },
        { text: 'REG-345', isRight: true },
        { text: '8OO-123' },
        { text: 'BBBB-789' },
      ],
      solution: '[A-Z]{3}-[0-9]{3}',
      shouldInclude: ['[', ']'],
    },
    {
      description: String.raw`<p>
        O caractere <code>^</code> pode ser usado dentro de conjuntos de caracteres para negá-lo, correspondendo a tudo exceto aqueles caracteres.
      </p>
      <p>
        Por exemplo, a <b>regex</b> <code>[^c]ar</code> corresponderá tanto a <code>bar</code> quanto a <code>jar</code>, mas não a <code>car</code>.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde perfeitamente à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'blue led' },
        { text: 'red led' },
        { text: 'cozy bed' },
        { text: 'green led' },
        { text: 'cool red', isRight: true },
      ],
      solution: '.+ [^lb]ed',
      shouldInclude: ['[^'],
    },
    {
      description: String.raw`<p>
        Às vezes você pode querer criar uma regex que precise corresponder a qualquer um dos metacaracteres.
        Nesses casos, você pode usar <code>\</code>. Ele escapará o próximo caractere, permitindo que você corresponda a caracteres reservados.
      </p>
      <p>
        Como exemplo, você pode usar a <b>regex</b> <code>[a-zA-Z]+\.</code> para corresponder a palavras com um ponto no final.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde perfeitamente à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: '20/20' },
        { text: '10+20', isRight: true },
        { text: '10:20' },
        { text: '11-21' },
        { text: '24/7' },
      ],
      solution: String.raw`[0-9]+\+[0-9]+`,
      shouldInclude: ['\\'],
    },
    {
      description: String.raw`<p>
        Você deve ter notado que, em cada nível até agora, você deveria obter uma correspondência perfeita. Também tínhamos alguns caracteres específicos sempre visíveis no campo de entrada.
        No entanto, <b>regex</b> também corresponde a substrings, então <code>Program</code> encontrará uma correspondência tanto em <code>Program</code> quanto em <code>Programming</code> (que contém a substring).
      </p>
      <p>
        Se você quiser uma regex que corresponda ao início ou ao fim de uma string, pode usar os metacaracteres de âncora <code>^</code> e <code>$</code>.
        O símbolo circunflexo <code>^</code> é usado no início da regex para verificar se um caractere correspondente é o primeiro caractere da string de entrada.
        O cifrão $ é usado para verificar se um caractere correspondente é o último caractere da string.
      </p>
      <p>
        Seguindo isso, <code>^program$</code> corresponderá apenas a strings que são exatamente <code>program</code> e não a strings que o contenham.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde a todas as peças que bloqueiam o personagem para o próximo nível. Observe que desta vez a correspondência pode não precisar ser perfeita.
      </p>`,
      items: [
        { text: 'Cold beer' },
        { text: 'Tasty food' },
        { text: 'Nice wine' },
        { text: 'Cool book', isRight: true },
        { text: 'Cool game', isRight: true },
      ],
      solution: '^Cool',
      isNotPerfectMatch: true,
      shouldInclude: ['^'],
    },
    {
      description: String.raw`<p>
        <b>Regex</b> também tem alguns conjuntos de caracteres abreviados que podem facilitar seu uso em consultas mais complexas.
        Um dos atalhos mais usados é <code>\w</code>, que corresponde a qualquer caractere alfanumérico. Seria o equivalente a <code>[a-zA-Z0-9_]</code>.
      </p>
      <p>
        De forma semelhante, o atalho <code>\W</code> (com W maiúsculo) corresponderá a todos os caracteres que <b>não</b> são alfanuméricos.
      </p>
      <p>
        Por exemplo, <code>\w{2}\W{2}</code> corresponderia a dois caracteres alfanuméricos seguidos por dois não alfanuméricos, como <code>ab$*</code>.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde a todas as peças que bloqueiam o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'Required*' },
        { text: '$500', isRight: true },
        { text: '@regex', isRight: true },
        { text: '100%' },
        { text: 'test@regex.com' },
      ],
      solution: String.raw`\W+\w+`,
      shouldInclude: [String.raw`\w`],
    },
    {
      description: String.raw`<p>
        De forma semelhante a <code>\w</code>, também podemos usar o conjunto de caracteres abreviado <code>\d</code> para corresponder apenas a dígitos (<code>[0-9]</code>).
        No mesmo sentido, sua versão maiúscula, <code>\D</code>, corresponderá a tudo que <b>não</b> é um dígito.
      </p>
      <p>
        Por exemplo, <code>\D+\D{3}</code> corresponderia a um conjunto de não dígitos seguido por três dígitos, como <code>ABC-123</code>.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'Required*' },
        { text: 'test@regex.com' },
        { text: '@regex' },
        { text: '$500', isRight: true },
        { text: '100%', isRight: true },
      ],
      solution: String.raw`\D?\d+\D?`,
      shouldInclude: [String.raw`\d`],
    },
    {
      description: String.raw`<p>
        O terceiro atalho de <b>regex</b> é <code>\s</code>, que é usado para corresponder a caracteres de espaço em branco (<code>[\t\n\f\r\p{Z}]</code>) na string de entrada.
        Ele corresponderá a tabs, espaços e quebras de linha, por exemplo.
      </p>
      <p>
        Ele também tem sua versão maiúscula <code>\S</code>, que corresponderá a qualquer caractere que <b>não</b> seja espaço em branco.
      </p>
      <p>
        Por exemplo, <code>\S+@email.com</code> corresponderia apenas a strings que começam com um conjunto de caracteres que não são espaços em branco e terminam com <code>@email.com</code>.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: '20% discount', isRight: true },
        { text: 'U$5.000' },
        { text: '5 * 2 = 10' },
        { text: '20%' },
        { text: '10:20 a m' },
      ],
      solution: String.raw`\S+\s\S+`,
      shouldInclude: [String.raw`\s`],
    },
    {
      description: String.raw`<p>
        Lookarounds são alguns tipos específicos de <b>grupos de não captura</b> usados para corresponder a padrões que podem estar antes ou depois de determinado padrão sem incluí-lo.
      </p>
      <p>
        Um exemplo disso é o lookbehind positivo (<code>(?&lt;=)</code>), que poderia ser usado como <code>(?&lt;=\$)[0-9\.]*</code> para corresponder apenas a números que seguem um cifrão.
      </p>
      <p>
        Ao usar os lookarounds, os padrões correspondidos não serão incluídos no resultado; é por isso que a correspondência não precisa ser perfeita nestes níveis.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'Result: abc' },
        { text: 'values: 123' },
        { text: 'Result: 123', isRight: true },
        { text: '123 is the result' },
        { text: ':123' },
      ],
      solution: String.raw`(?<=Result: )\d+`,
      shouldInclude: ['?<='],
      isNotPerfectMatch: true,
    },
    {
      description: String.raw`<p>
        O lookbehind positivo também tem uma alternativa de negação, que pode ser usada substituindo o sinal de igual pelo sinal de exclamação <code>(?&lt;!)</code>.
      </p>
      <p>
        Esta expressão corresponderá a valores que não começam com um determinado padrão, então se usarmos esta <b>regex</b> <code>(?&lt;!\Value: )[0-9\.]+</code> ela corresponderá apenas a dígitos que não têm um rótulo <code>Value: </code> precedente.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'R$1' },
        { text: '$5' },
        { text: 'only $1' },
        { text: '$$$' },
        { text: '2000$', isRight: true },
      ],
      solution: String.raw`(?<!\$)\d+`,
      shouldInclude: ['?<!'],
      isNotPerfectMatch: true,
    },
    {
      description: String.raw`<p>
        De forma semelhante ao lookbehind, o lookahead permite corresponder a algo seguido de determinado padrão sem incluí-lo.
        Você pode usá-lo como <code>(?=)</code>.
      </p>
      <p>
        Se quiser, por exemplo, corresponder a números que vêm antes de um sinal de porcentagem, você poderia usar a seguinte <b>regex</b> <code>\d+(?=%)</code>.
        Lembre-se de que isso corresponderá apenas aos números, e não ao sinal de porcentagem.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: '00:00' },
        { text: '12 pm', isRight: true },
        { text: "12 o'clock" },
        { text: 'midnight' },
        { text: '12' },
      ],
      solution: String.raw`\d+(?= pm)`,
      shouldInclude: ['?='],
      isNotPerfectMatch: true,
    },
    {
      description: String.raw`<p>
        Assim como o lookbehind, o lookahead também tem sua alternativa negativa substituindo o sinal de igual por um sinal de exclamação (<code>(?!)</code>).
      </p>
      <p>
        Você poderia usar esta <b>regex</b> <code>\d{2}(?! (p|a)m)</code> para corresponder apenas a pares de números que não vêm antes de <code>am</code> ou <code>pm</code>.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: '7 dl' },
        { text: '5 l' },
        { text: '9 ml' },
        { text: '22 kb', isRight: true },
        { text: '10 km', isRight: true },
      ],
      solution: String.raw`\d+(?! \w?l)`,
      shouldInclude: ['?!'],
      isNotPerfectMatch: true,
    },
    {
      description: String.raw`<p>
        Por fim, aqui está um desafio para você praticar os conceitos aprendidos durante esta jornada.
      </p>
      <p>
        Tente descobrir qual é a <b>regex</b> que corresponde à peça que bloqueia o personagem para o próximo nível.
      </p>`,
      items: [
        { text: 'my-regex+game@fun' },
        { text: '@fun.com.br' },
        { text: 'my-regex@game@fun.com.br' },
        { text: 'my-regex.com.br' },
        { text: 'my-regex+game@fun.com.br', isRight: true },
      ],
      solution: String.raw`[\w+-]+@\w+(\.\w+)+`,
    },
  ];

  var LAST_LEVEL = LEVELS.length;
  var FINAL_DESCRIPTION =
    '<p>Parabéns, você terminou o jogo de regex!</p>' +
    '<p>A jornada das regex não termina aqui. As regex também têm diferentes tipos de flags que podem executar consultas de maneiras diferentes, e eu definitivamente recomendo dar uma olhada mais a fundo em como elas funcionam.</p>' +
    '<p>Você pode encontrar mais informações <a href="https://github.com/ziishaned/learn-regex" target="_blank" rel="noreferrer">neste repositório</a>, no qual me inspirei fortemente.</p>';

  var platform = document.getElementById('game-platform');
  var character = document.getElementById('character');
  var winLabel = document.getElementById('win-label');
  var instructionsContent = document.getElementById('instructions-content');
  var mobileWarning = document.getElementById('mobile-warning');
  var form = document.getElementById('regex-form');
  var input = document.getElementById('regex-input');
  var inputWrapper = document.getElementById('input-wrapper');
  var previousButton = document.getElementById('previous-level');
  var nextButton = document.getElementById('next-level');
  var answerButton = document.getElementById('answer-button');

  var level = 0;
  var appRegex = '';
  var regexError = '';
  var resultShouldInclude = false;
  var inputRegex = '';

  var layoutTop = 'calc(10% - 0px + 60px)';
  var layoutLeft = getLeftPosition(0);
  var layoutNewLevel = false;
  var layoutFaceRight = true;

  var renderedLevel = null;
  var renderedRegex = null;
  var groupElements = [];
  var itemElements = [];
  var renderScheduled = false;

  function getLevel(levelIndex) {
    return LEVELS[levelIndex] || { description: '', items: [] };
  }

  function getLeftPosition(levelIndex) {
    if (levelIndex === 0) return 'calc(40%)';
    var horizontalIndex = LEVELS[levelIndex - 1].items.findIndex(function (item) {
      return item.isRight;
    });
    return 'calc(' + 20 * horizontalIndex + '%)';
  }

  function getInitialTop(levelIndex) {
    return 'calc(10% - ' + levelIndex * 259 + 'px + 60px)';
  }

  function afterPaint(callback) {
    requestAnimationFrame(function () {
      requestAnimationFrame(callback);
    });
  }

  function match(regex, text, isNotPerfectMatch) {
    if (!isNotPerfectMatch) {
      regex = '^' + regex + '$';
    }
    return RegExp(regex).test(text);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function isMobileDevice() {
    var userAgent = navigator.userAgent || '';
    var platform = navigator.platform || '';
    var isIPad = /iPad|iPhone|iPod/.test(userAgent) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    return isIPad || /Mobi|Android|Tablet|Silk|Kindle|PlayBook|BlackBerry|Opera Mini|IEMobile/i.test(userAgent);
  }

  function renderInstructions() {
    var levelInfo = getLevel(level);
    var hasDescription = Boolean(levelInfo.description);
    var html = '';

    if (hasDescription) {
      html += levelInfo.description;
      html +=
        '<p class="info">Lembre-se de que pode haver muitas soluções diferentes para isso. Tente usar algo que você aprendeu neste nível.</p>';
    } else {
      html += FINAL_DESCRIPTION;
    }

    if (resultShouldInclude) {
      html +=
        '<p class="try-again">Você encontrou uma solução perfeita, mas tente usar algo que você aprendeu neste nível.</p>';
    }

    if (regexError) {
      html += '<p class="try-again">Há um erro na sua regex: ' + escapeHtml(regexError) + '</p>';
    }

    instructionsContent.innerHTML = html;
    inputWrapper.className = 'input' + (!levelInfo.isNotPerfectMatch ? ' exact' : '');
    previousButton.disabled = level <= 0;
    nextButton.disabled = level >= LAST_LEVEL;
    answerButton.hidden = !hasDescription;
  }

  function buildGroup(levelIndex) {
    var levelInfo = LEVELS[levelIndex];
    var group = document.createElement('div');
    group.className = 'item-group' + (level !== levelIndex ? ' fade' : '');

    var items = levelInfo.items.map(function (item) {
      var column = document.createElement('div');
      column.className = 'regex-column';

      var itemElement = document.createElement('div');
      itemElement.className = 'regex-item';
      itemElement.textContent = item.text;

      var footprint = document.createElement('div');
      footprint.className = 'regex-footprint';

      if (item.isRight) {
        var image = document.createElement('img');
        image.src = 'assets/footprint.png';
        image.alt = 'pegada';
        footprint.appendChild(image);
      }

      column.appendChild(itemElement);
      column.appendChild(footprint);
      group.appendChild(column);

      return { item: item, element: itemElement };
    });

    return { group: group, items: items };
  }

  function renderGame(rebuildGroups) {
    if (rebuildGroups) {
      platform.innerHTML = '';
      groupElements = [];
      itemElements = [];

      LEVELS.forEach(function (levelInfo, index) {
        var built = buildGroup(index);
        platform.appendChild(built.group);
        groupElements.push(built.group);
        itemElements.push(built.items);
      });

      var lastPlatform = document.createElement('div');
      lastPlatform.className = 'last-platform';

      if (level === LAST_LEVEL) {
        var cash = document.createElement('div');
        cash.className = 'cash';

        var cashImage = document.createElement('img');
        cashImage.src = 'assets/cash.png';
        cashImage.alt = 'dinheiro';
        cash.appendChild(cashImage);
        lastPlatform.appendChild(cash);
      }

      var floor = document.createElement('div');
      floor.className = 'regex-floor';
      lastPlatform.appendChild(floor);
      platform.appendChild(lastPlatform);

      winLabel.hidden = level !== LAST_LEVEL;
      character.style.left = layoutLeft;
      character.className = 'regex-character' + (!layoutFaceRight ? ' face-left' : '');
    }

    applyItemClasses();
  }

  function applyItemClasses() {
    var activeRegex = regexError ? '' : appRegex;

    itemElements.forEach(function (items, index) {
      var levelInfo = LEVELS[index];

      items.forEach(function (entry) {
        var isMatch = false;

        if (activeRegex) {
          try {
            isMatch = match(activeRegex, entry.item.text, levelInfo.isNotPerfectMatch);
          } catch (error) {
            isMatch = false;
          }
        }

        var isLevelMatch = isMatch && level - 1 === index && layoutNewLevel;
        var isFalseMatch = isMatch && !isLevelMatch && level === index && !layoutNewLevel;
        var className = 'regex-item' + (isLevelMatch ? ' is-match' : '') + (isFalseMatch ? ' is-false-match' : '');

        if (entry.element.className !== className) {
          entry.element.className = className;
        }
      });
    });
  }

  function runLevelEffect() {
    var previousGroups = groupElements.slice(0, level);
    var heights = previousGroups.reduce(function (total, group) {
      return total + group.getBoundingClientRect().height;
    }, 0);

    layoutTop = 'calc(120px - ' + heights + 'px)';
    platform.style.top = layoutTop;
    layoutLeft = getLeftPosition(level);
    layoutNewLevel = true;
    applyItemClasses();
    character.style.left = layoutLeft;
    character.className = 'regex-character' + (!layoutFaceRight ? ' face-left' : '');

    var previousRightIndex = level === 0 ? 0 : LEVELS[level - 1].items.findIndex(function (item) {
      return item.isRight;
    });
    var currentRightIndex = level === LAST_LEVEL ? 0 : LEVELS[level].items.findIndex(function (item) {
      return item.isRight;
    });

    setTimeout(function () {
      layoutFaceRight = currentRightIndex > previousRightIndex;
      character.className = 'regex-character' + (!layoutFaceRight ? ' face-left' : '');
    }, 3000);
  }

  function render() {
    var isInitial = renderedLevel === null;
    var levelChanged = isInitial || renderedLevel !== level;
    var layoutRegex = regexError ? '' : appRegex;
    var regexChanged = renderedRegex === null || renderedRegex !== layoutRegex;

    renderInstructions();
    renderGame(levelChanged);

    if (isInitial) {
      layoutTop = getInitialTop(level);
      platform.style.top = layoutTop;
    }

    renderedLevel = level;
    renderedRegex = layoutRegex;

    if (levelChanged) {
      var runEffects = function () {
        runLevelEffect();

        if (regexChanged) {
          layoutNewLevel = false;
          applyItemClasses();
        }
      };

      if (isInitial) {
        afterPaint(runEffects);
      } else {
        runEffects();
      }
    } else if (regexChanged) {
      layoutNewLevel = false;
      applyItemClasses();
    }
  }

  function scheduleRender() {
    if (renderScheduled) return;
    renderScheduled = true;

    queueMicrotask(function () {
      renderScheduled = false;
      render();
    });
  }

  function changeLevel(nextLevel) {
    level = nextLevel;
    inputRegex = '';
    input.value = '';
    scheduleRender();
  }

  function submitRegex(regex) {
    appRegex = regex;
    resultShouldInclude = false;
    regexError = '';

    try {
      var levelInfo = getLevel(level);
      var rightTexts = levelInfo.items
        .filter(function (item) {
          return item.isRight;
        })
        .map(function (item) {
          return item.text;
        });
      var rightCount = levelInfo.items.filter(function (item) {
        return match(regex, item.text, levelInfo.isNotPerfectMatch);
      }).length;
      var isRegexRight =
        rightTexts.every(function (text) {
          return match(regex, text, levelInfo.isNotPerfectMatch);
        }) && rightCount === rightTexts.length;

      if (isRegexRight) {
        var includesRequiredValues =
          !levelInfo.shouldInclude ||
          levelInfo.shouldInclude.every(function (character) {
            return regex.includes(character);
          });

        if (level < LAST_LEVEL && includesRequiredValues) {
          setTimeout(function () {
            changeLevel(level + 1);
          }, 10);
        } else {
          resultShouldInclude = true;
        }
      }
    } catch (error) {
      var regexFailure = error instanceof Error ? error : new Error(String(error));
      regexError = regexFailure.message;
    }

    scheduleRender();
  }

  input.addEventListener('input', function (event) {
    inputRegex = event.target.value;
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitRegex(inputRegex);
  });

  answerButton.addEventListener('click', function () {
    var solution = getLevel(level).solution;
    inputRegex = solution;
    input.value = solution;
  });

  previousButton.addEventListener('click', function () {
    submitRegex('');
    changeLevel(level - 1);
  });

  nextButton.addEventListener('click', function () {
    submitRegex('');
    changeLevel(level + 1);
  });

  mobileWarning.hidden = !isMobileDevice();

  render();
})();
