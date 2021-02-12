// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "readTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "readDesc",
    message: "Enter a description of your project",
  },
  {
    type: "input",
    name: "readInstall",
    message: "Enter instructions on how to install your project",
  },
  {
    type: "input",
    name: "readUsage",
    message: "Enter instructions on the usage of your project",
  },
  {
    type: "input",
    name: "readContrib",
    message:
      "Enter instructions on how to contribute to your application if applicable",
  },
  {
    type: "input",
    name: "readTest",
    message: "Enter some test cases the user can use on your project",
  },
  {
    type: "input",
    name: "readCredit",
    message: "Enter links and points of contact as credit on the application",
  },
  {
    type: "input",
    name: "gitHubUser",
    message: "Enter your GitHub username",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Enter your email address",
  },
  {
    type: "list",
    name: "chooseLicence",
    message: "Select the licences that apply to your project",
    choices: [
      "MIT",
      "Apache 2.0",
      "Mozilla Public License 2.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Unlicense"
    ]
  },
];

// Writes README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) => err ? console.log(err) : console.log("Readme has been Generated successfully"));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((responses => {
    const readmeAnswers = generateMarkdown(responses);
    writeToFile("README.md", readmeAnswers);
  }));
}

// Function call to initialize app
init();
