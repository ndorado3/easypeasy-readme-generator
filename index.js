//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //fs = file system
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

//Array of questions for user input and the
//init function
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the project title?",
        name: "Title",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "UserName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
      },
      {
        type: "input",
        message: "Please provide a short description of your project.",
        name: "Description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
      },
      {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "Usage",
      },
      {
        type: "input",
        message: "Please add contributors, if any.",
        name: "Contribution",
      },
      {
        type: "checkbox",
        message: "Select a license:",
        choices: ["MIT", "BSD3", "EPL","NONE"],
        name: "license",
      },
      {
        type: "input",
        message: "What command did you use to test this Application?",
        name: "Tests",
      },
    ])
    .then((data) => {
      writeToFile("sampleREADME.md", generateMarkdown(data));
    });
}

//This function creates the README file
function writeToFile(fileName, data) {
  // console.log("this is our path",process.cwd())
  fs.writeFile(path.join(process.cwd(),fileName),data, (err) =>
    err ? console.error(err) : console.log("That was Easypeasy!! Your professional README was succesfully created!!")
  );
}

// Function call to initialize app
init();
