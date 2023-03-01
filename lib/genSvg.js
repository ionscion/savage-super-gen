
function genCircleSvg(newShape) {
  const { shapeColor, text, textColor } = newShape;
  return `
<svg version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
}

function genTriangleSvg(newShape) {
  const { shapeColor, text, textColor } = newShape;
  return `
  <svg version="1.1" width="300" height="200">
  
  <polygon points="150,50 200,150 100,150" fill="${shapeColor}"/>
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`;
}

function genSquareSvg(newShape) {
  const { shapeColor, text, textColor } = newShape;
  return `
  <svg version="1.1" width="300" height="200">
  
  <rect x="50" y="50" width="100" height="100" fill="${shapeColor}"/>
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`;
}

module.exports = {
  genCircleSvg: genCircleSvg,
  genTriangleSvg: genTriangleSvg,
  genSquareSvg: genSquareSvg,
};
