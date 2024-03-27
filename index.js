//state libraries
const inquirer = require("inquirer");
const jest = require("jest");
const colors = require("colors");

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
    fs.writeFile("logo.svg", Response, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    })
  );
//function for the prompt that asks about the shape
function shape(logoShape) {
  if (logoShape === "Square") {
    return "";
  } else if (logoShape === "Circle") {
    return "";
  } else if (logoShape === "Triangle") {
    return "";
  }
}
