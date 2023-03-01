const { Shape, Circle, Triangle, Square } = require("./shapes");
function genShapeSvg(newShape) {
    return `
    <svg version="1.1" width="300" height="200">
    
    ${newShape.render()}
    
    ${newShape.textRender()}
    
    </svg>`;
  }

module.exports = {
  genShapeSvg: genShapeSvg,
};
