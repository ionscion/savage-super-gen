const { Shape, Circle, Triangle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");
const genSvg = require("./lib/genSvg");

async function startInquirer() {
  const { shapeColor, text, textColor, shape } = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to make?",
      choices: [
        { name: "Circle", value: "Circle" },
        { name: "Triangle", value: "Triangle" },
        { name: "Square", value: "Square" },
      ],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like the shape to be?",
    },
    {
      type: "input",
      name: "text",
      message: "What text would you like? Please enter up to 3 characters:",
      validate: function (input) {
        if (input.length > 3) {
          return "Please enter no more than 3 characters!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "What text color would you like?",
    },
  ]);

  let newShape;
  let svg;
  switch (shape) {
    case "Circle":
      newShape = new Circle(shapeColor, text, textColor);
      svg = genSvg.genCircleSvg(newShape);
      writeToFile(svg);
      break;
    case "Triangle":
      newShape = new Triangle(shapeColor, text, textColor);
      svg = genSvg.genTriangleSvg(newShape);
      writeToFile(svg);
      break;
    case "Square":
      newShape = new Square(shapeColor, text, textColor);
      svg = genSvg.genSquareSvg(newShape);
      writeToFile(svg);
      break;
    default:
      console.log("Invalid shape choice");
      return;
  }
}

function writeToFile(data) {
  fs.writeFile("dist/logo.svg", data, { flag: "w" }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg successfully!");
    }
  });
}

startInquirer();
