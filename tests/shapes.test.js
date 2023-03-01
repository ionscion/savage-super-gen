const { Shape, Circle, Triangle, Square } = require("../lib/shapes");
const color = require("color");
describe("Shape", () => {
  test("Circle class returns correct data", () => {
    const circle = new Circle("brown", "BLS", "white");
    expect(circle).toEqual({
      shapeColor: "brown",
      text: "BLS",
      textColor: "white",
    });
  });
  test("Triangle class returns correct data", () => {
    const triangle = new Triangle("brown", "BLS", "white");
    expect(triangle).toEqual({
      shapeColor: "brown",
      text: "BLS",
      textColor: "white",
    });
  });
  test("Square class returns correct data", () => {
    const square = new Square("brown", "BLS", "white");
    expect(square).toEqual({
      shapeColor: "brown",
      text: "BLS",
      textColor: "white",
    });
  });
});

describe("shapeColor", () => {
  test("setColor method returns entered string", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.shapeColor).toEqual("blue");
  });
});

describe("render color Triangle", () => {
  test("Render method returns correct svg string with color entered", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
    );
  });
});

describe("render color circle", () => {
  test("Render method returns correct svg string with color entered", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="green"/>`
    );
  });
});

describe("render color square", () => {
  test("Render method returns correct svg string with color entered", () => {
    const shape = new Square();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      `<rect x="100" y="50" width="150" height="150" fill="orange"/>`
    );
  });
});

describe("render text Triangle", () => {
  test("Render method returns correct svg string with text and text color entered", () => {
    const shape = new Triangle();
    shape.setText("ben");
    shape.setTextColor("blue");
    expect(shape.textRender()).toEqual(
      `<text x="150" y="160" font-size="60" text-anchor="middle" fill="blue">ben</text>`
    );
  });
});

describe("render text Circle", () => {
  test("Render method returns correct svg string with text and text color entered", () => {
    const shape = new Circle();
    shape.setText("ben");
    shape.setTextColor("blue");
    expect(shape.textRender()).toEqual(
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ben</text>`
    );
  });
});

describe("render text Square", () => {
  test("Render method returns correct svg string with text and text color entered", () => {
    const shape = new Square();
    shape.setText("ben");
    shape.setTextColor("blue");
    expect(shape.textRender()).toEqual(
      `<text x="175" y="150" font-size="60" text-anchor="middle" fill="blue">ben</text>`
    );
  });
});
