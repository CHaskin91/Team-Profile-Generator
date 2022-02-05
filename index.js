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

promptManager();