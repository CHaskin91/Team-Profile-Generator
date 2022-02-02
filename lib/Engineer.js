const Employee = require('./Employee');

class Engineer {
    constructor(github, role) {
        this.github = github;
        this.role = 'Engineer';
    }
}

module.exports = Engineer;