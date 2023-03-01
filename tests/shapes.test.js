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


