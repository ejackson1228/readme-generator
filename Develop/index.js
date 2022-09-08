// TODO: Include packages needed for this application
const inquirer = import('inquirer');
const fs = import('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project name',
        message: 'What is the title of your project?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log("Please enter your project name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project adhering to this form: \n What was your motivation? \n Why did you build this project? \n What problem does it solve? \n What did you learn? '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step instructions on how to get the development environment running:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use. Include screenshots as needed. \n To add a screenshot, create and assets/image folder in your repo and upload your image to it. Then, using the realtive filepath, add it to your README using the following syntax: \n ```md \n ![alt text](assets/images/screenshot.png) \n ```'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide examples on how to run tests of your application:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List all collaborators (if any) with links to their Github. \n If you used any third-party assets that require attribution, list links to their primary web presence.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide a license: \n if you need help choosing a license, please refer to: (https://choosealicense.com/) '
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide contact(s) information for additional questions regarding your project:'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Please provide the names of your readme sections for a Table of Contents:'
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

            // after all answers are collected, write to file

            // TODO: build a string that uses our answers to generate some markdown and write that to our file as the "data" parameter. (replaces the test values below)
                // writeToFile('text.txt', 'test data');
        });
}

// Function call to initialize app
init();
