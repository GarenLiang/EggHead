/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Javascript Regular Expressions: Find Plain Text Patterns</title>
  <style>
    pre {
      line-height: 2;
    }
    span {
      background-color: #eee;
      padding: 1px;
      outline: 1px solid #999;
    }
  </style>
</head>
<body>
  <pre></pre>
</body>
</html>

*/

'use strict';


var str = `Cat
sat on
the hat.`;
var regex = /\./g

/**
 * @param  String str
 * @param  RegExp regex
 * @param  HTMLElement target
 */
const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str =>
      `<span>${str}</span>`
    );
}
output(str, regex, document.querySelector('pre'));

