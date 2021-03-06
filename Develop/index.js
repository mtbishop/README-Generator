// Required files to pull data from
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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
    name: "chooseLicense",
    message: "Select the licenses that apply to your project",
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
// function that creates the readme files with responses for if it's created successfully
function writeToFile (data) {
  fs.writeFile("./utils/README.md", data, (err) => err ? console.log(err) : console.log("Readme has been generated successfully"));
}

// function that initializes the inquirer npm and generates the responses from the user inputted questions
function init() {
  inquirer
  .prompt(questions)
  .then((responses => {
    const readmeAnswers = generateMarkdown(responses);
    writeToFile(readmeAnswers);
  }));
}
// runs initializing function
init();
