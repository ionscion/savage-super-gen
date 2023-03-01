const {Shape, Circle, Triangle, Square} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

async function startInquirer() {
    const {text, textColor, shapeColor, shape } = await inquirer.prompt([
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
        {
            type: "list",
            name: "shape",
            message: "What shape would you like to make?",
            choices: [
              { name: "Circle", value: "circle" },
              { name: "Triangle", value: "triangle" },
              { name: "Square", value: "square" },
            ],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "What color would you like the shape to be?",
        },
      ]);
      console.log("Generated logo.svg!");
}

startInquirer();