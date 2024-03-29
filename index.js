//state libraries
const inquirer = require("inquirer");
const jest = require("jest");
const colors = require("colors");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

//prompt for command line
inquirer
  .prompt([
    {
      type: "input",
      name: "logoText",
      message: "Please enter three characters for the logo",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Please input a color(red,blue,green) or hexadecimal number for your text color",
    },
    {
      type: "list",
      name: "logoShape",
      message: "Please pick your shape",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "logoColor",
      message:
        "Please input a color(red,blue,green) or hexadecimal number for your shape color",
    },
  ])
  //.then to create the logo after prompts are asked
  .then((Response) =>
    fs.writeFile("logo.svg", createLogo(Response), (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    })
  );
//function for the prompt that uses the inputs to create the desired logo
function createLogo(userChoices) {
  if (userChoices.logoShape === "Square") {
    const square = new Square(
      userChoices.logoColor,
      userChoices.logoText,
      userChoices.textColor
    );
    return square.render();
  } else if (userChoices.logoShape === "Circle") {
    const circle = new Circle(
      userChoices.logoColor,
      userChoices.logoText,
      userChoices.textColor
    );
    return circle.render();
  } else if (userChoices.logoShape === "Triangle") {
    const triangle = new Triangle(
      userChoices.logoColor,
      userChoices.logoText,
      userChoices.textColor
    );
    return triangle.render();
  }
}
