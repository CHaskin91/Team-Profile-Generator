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
    ])
}

promptManager();