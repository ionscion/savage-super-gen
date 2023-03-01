const {Shape, Circle, Triangle, Square} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

const circle = new Circle("BEN", "Green", "Blue");
console.log(circle);
console.log(circle.render());