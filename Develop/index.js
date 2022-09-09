// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = 
    [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else if (!projectNameInput){
                console.log("Please enter your project name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Descriptions are necessary for a quality readme, please provide one!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step instructions on how to get the development environment running:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use. '
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide examples on how to run tests of your application, is there are any:'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List all collaborators (if any) with links to their Github. \n If you used any third-party assets that require attribution, list links to their primary web presence.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose an appropriate license for this project: \n if you need help choosing a license, please refer to: (https://choosealicense.com/) ',
        choices: ["MIT", "Apache", "ISC", "Mozilla", "GNU GPL v3", "Eclipse"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github username for additional questions regarding your project:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email for additional questions regarding your project:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ?
        console.log(err) : console.log('Readme Generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            //do stuff with answers
            console.log(answers)
            // generateMarkdown(answers);
            // after all answers are collected, write to file

            // TODO: build a string that uses our answers to generate some markdown and write that to our file as the "data" parameter. (replaces the test values below)
                writeToFile('ReadME.md', generateMarkdown(answers))
        });
}

// Function call to initialize app
init();
