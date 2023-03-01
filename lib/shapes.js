class Shape {
  constructor(shapeColor, text, textColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(str) {
    this.shapeColor = str;
  }
}

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }
  textRender() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
  }
  textRender() {
    return `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<rect x="100" y="50" width="150" height="150" fill="${this.shapeColor}"/>`;
  }
  textRender() {
    return `<text x="175" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
