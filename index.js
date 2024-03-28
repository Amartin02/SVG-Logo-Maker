//state libraries
const inquirer = require("inquirer");
const jest = require("jest");
const colors = require("colors");
const fs = require("fs");
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
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" x="75" y="25" style="fill:${userChoices.logoColor};" />
      Sorry, your browser does not support inline SVG.  
      <text style="font-size: 75px" x="100" y="125" fill="${userChoices.textColor}">${userChoices.logoText}</text></svg>`;
  } else if (userChoices.logoShape === "Circle") {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r="95" cx="150" cy="100" fill="${userChoices.logoColor}" />
    Sorry, your browser does not support inline SVG.  
    <text style="font-size: 75px" x="100" y="125" fill="${userChoices.textColor}">${userChoices.logoText}</text></svg> `;
  } else if (userChoices.logoShape === "Triangle") {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,15 250,190 50,190" style="fill:${userChoices.logoColor}"/>
    Sorry, your browser does not support inline SVG.
    <text style="font-size: 75px" x="100" y="175" fill="${userChoices.textColor}">${userChoices.logoText}</text></svg>`;
  }
}
