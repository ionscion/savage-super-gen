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
      message: "What text would you like? Please enter 3 characters",
    },
    {
      type: "input",
      name: "textColor",
      message: "What text color would you like?",
    },
  ]);
  
  let newShape;

  switch (shape) {
    case "Circle":
      newShape = new Circle(shapeColor, text, textColor);
      break;
    case "Triangle":
      newShape = new Triangle(shapeColor, text, textColor);
      break;
    case "Square":
      newShape = new Square(shapeColor, text, textColor);
      break;
    default:
      console.log("Invalid shape choice");
      return;
  }
  let svg = genSvg.genCircleSvg(newShape);
  writeToFile(svg);
  console.log(svg);
}

function writeToFile(data) {
    fs.readFile("dist/logo.svg","utf8", (err) => {
        if (err) {
          // if the file does not exist, just write the data as a new file
          fs.writeFile("dist/logo.svg", data, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Generated logo.svg successfully!");
            }
          });
        } else {
            console.log("another error");
        }
});
}

startInquirer();
