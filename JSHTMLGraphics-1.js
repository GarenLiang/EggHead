/*
<!DOCTYPE html>
<html>
<head>
<meta name="description" content="HTML5 Canvas Graphics and Animation Video 1" />
  <meta charset="utf-8">
  <title>HTML5 Canvas Graphics and Animation</title>
</head>
<body>
  <canvas id="canvas" width="600" height="600"></canvas>
</body>
</html>

*/

window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  
  context.fillRect(10, 10, 100, 200);
};
