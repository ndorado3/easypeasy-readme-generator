//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user input
const questions = [
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
    name: "Contributor",
  },
  {
    type: "input",
    message: "What license was used for this project?",
    name: "License",
  },
  {
    type: "input",
    message: "What command did you use to test this Application?",
    name: "Test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile()
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
