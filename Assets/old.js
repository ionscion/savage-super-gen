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
    
    <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>
    
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
    </svg>`;
  }
  
  function genSquareSvg(newShape) {
    const { shapeColor, text, textColor } = newShape;
    return `
    <svg version="1.1" width="300" height="200">
    
    <rect x="100" y="50" width="150" height="150" fill="${shapeColor}"/>
    
    <text x="175" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
    </svg>`;
  }