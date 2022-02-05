const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generatePage = require('./src/page-template.js');

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

    // Push New Engineer into teamMemberArr
    .then(engineerData => {
        teamMemberArr.engineers.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github, engineerData.role));
        console.log(teamMemberArr);
        promptManagerNext();
    });
};

// If Create Intern was selected, prompt user for internData
const createIntern = internData => {
    if (!teamMemberArr.interns) {
        teamMemberArr.interns = [];
    }
    return inquirer.prompt([

        // Prompt User for Intern's Name
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name.');
                    return false;
                }
            }
        },

        // Prompt User for Intern's Employee ID
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

        // Prompt User for Intern's Email Address
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

        // Prompt User for Intern's School
        {
            type: 'input',
            name: 'school',
            message: 'What School is the Intern attending?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a School Name.');
                    return false;
                }
            }
        }
    ])

    // Push New Intern into teamMemberArr
    .then(internData => {
        teamMemberArr.interns.push(new Intern(internData.name, internData.id, internData.email, internData.school, internData.role));
        console.log(teamMemberArr);
        promptManagerNext();
    });
;}

promptManager();

// generateTeam created.  Writes to index.html page in dist/
function generateTeam() {
    writeToFile('dist/index.html', generatePage(teamMemberArr));
    console.log(`writeToFile function executed`);
};

// write the file to index.html
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Your team profile was generated successfully!  Go to the dist/ directory to find the index.html file')
    });
    copyFile();
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // If there's an error, reject the promise and send the error to the Promise .catch() method
            if (err) {
                reject(err);
                return;
            }
            // If passed, resolve the promise and send data to the .then() method
            resolve({
                ok: true,
                message: 'File created successfully!'
            });
        });
    });
};