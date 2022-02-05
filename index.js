const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// const generatePage = require('./src/page-template.js');

const teamMemberArr = [];

// Prompt manager with questions
const promptManager = managerData => {
    if (!teamMemberArr.managers) {
        teamMemberArr.managers = [];
    }
    return inquirer.prompt([

        // Prompt for Manager Name
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },

        // Prompt Manager for Employee ID
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID.');
                    return false;
                }
            }
        },

        // Prompt Manager for Email Address
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email Address?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter your Email Address.');
                    return false;
                }
            }
        },

        // Prompt Manager for Office Number
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Office Number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your Office Number.');
                    return false;
                }
            }
        }        
    ])
    .then(managerData => {
        // Push Manager data into a new Array
        teamMemberArr.managers.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber, managerData.role));
        console.log(teamMemberArr);
        promptManagerNext();
    });
};

// Prompt Manager for the next Steps. Build Engineer profile, Build Intern profile, or finish team
const promptManagerNext = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'managersChoice',
            message: 'What would you like to do next? Add an Engineer, add an Intern, or finish building your Team?',
            choices: ['Engineer', 'Intern', 'My team is complete!'],
        }
    ])
    .then(nextSteps => {
        switch(nextSteps.managersChoice) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
            // Generate the Team
                generateTeam();
                break;
        }
    });
};

// If Create Engineer was selected, prompt user for engineerData
const createEngineer = engineerData => {
    if (!teamMemberArr.engineers) {
        teamMemberArr.engineers = [];
    }
    return inquirer.prompt([
        // Prompt User for Engineer's Name
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name.');
                    return false;
                }
            }
        },

        // Prompt User for Engineer's Github Username
        {
            type: 'input',
            name: 'github',
            message: 'Enter their GitHub Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub Username.');
                    return false;
                }
            }
        },

        // Prompt User for Engineer's Employee ID
        {
            type: 'input',
            name: 'id',
            message: 'What is their Employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid Employee ID.');
                    return false;
                }
            }
        },

        // Prompt User for Engineer's Email Address
        {
            type: 'input',
            name: 'email',
            message: 'What is their Email Address?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid Email Address.');
                    return false;
                }
            }
        },
    ])

    // Push New team member into an Array
}

promptManager();