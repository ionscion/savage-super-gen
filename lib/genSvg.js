const { Shape, Circle, Triangle, Square } = require("./shapes");

function genCircleSvg(newShape) {
  const { shapeColor, text, textColor } = newShape;
  return `
<svg version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
}



module.exports = {
    genCircleSvg: genCircleSvg,
}