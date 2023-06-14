const inquirer = require("inquirer"); // Importing the inquirer module for user prompts
const SVG = require("./svg"); // Importing the SVG class from the "svg" module
const { Circle, Triangle, Square } = require("./shapes"); // Importing the Circle, Triangle, and Square classes from the "shapes" module
const { writeFile } = require("fs/promises"); // Importing the writeFile function from the "fs/promises" module

class CLI {
  async run() {
    try {
      const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
        // Prompting the user for input and waiting for their responses
        {
          name: "text",
          type: "input",
          message: "Enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) => text.length <= 3 || "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ]);

      let shape;
      switch (shapeType) {
        // Creating an instance of the appropriate shape class based on the user's choice
        case "circle":
          shape = new Circle();
          break;
        case "square":
          shape = new Square();
          break;
        default:
          shape = new Triangle();
          break;
      }
      shape.setColor(shapeColor); // Setting the color of the shape

      const svg = new SVG(); // Creating an instance of the SVG class
      svg.setText(text, textColor); // Setting the text and its color in the SVG
      svg.setShape(shape); // Setting the shape in the SVG

      await writeFile("logo.svg", svg.render()); // Writing the SVG markup to a file named "logo.svg"
      console.log("Generated logo.svg");
    } catch (error) {
      console.log(error);
      console.log("Oops! Something went wrong.");
    }
  }
}

module.exports = CLI;
