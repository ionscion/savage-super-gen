const { Shape, Circle, Triangle, Square } = require("../lib/shapes");

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

describe("renderTriangle", () => {
  test("Render method returns correct svg string with color entered", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
    );
  });
});

describe("render circle", () => {
    test("Render method returns correct svg string with color entered", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="green"/>`
      );
    });
  });