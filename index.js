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
      <rect width="150" height="150" x="10" y="10" style="fill:${userChoices.logoColor};" />
      Sorry, your browser does not support inline SVG.  
      <text x="75" y="90" fill="${userChoices.textColor}">${userChoices.logoText}</text></svg>`;
  } else if (userChoices.logoShape === "Circle") {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle r="45" cx="50" cy="50" fill="${userChoices.logoColor}" />
    Sorry, your browser does not support inline SVG.  
    <text x="40" y="55" fill="${userChoices.textColor}">${userChoices.logoText}</text></svg> `;
  } else if (userChoices.logoShape === "Triangle") {
    return `<svg height="300" width="200"><polygon points="75,75 25,75 50,25" fill="${userChoices.logoColor}"  transform="  scale(1)"></polygon><text><text x="41" y="55" fill="${userChoices.textColor}">${userChoices.logoText}</text></svg>`;
  }
}
