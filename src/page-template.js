const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require('fs');

const generateManagerCards = employeeArr => {
    return `
         ${employeeArr
            .map(({ name, id, email, officeNumber, role }) => {

                return `
                <div class = "card employee-card">
                    <div class = "card-header">
                        <h2 class = "card-title">${name}</h2>
                        <h3 class = "card-subtitle mb-2 text-muted"><i class="fas fa-mug-hot"></i> ${role}</h3>
                    </div>
                    
                    <div class = "card-body">
                        <ul class = "list-group">
                            <li class = "list-group-item">ID: ${id}</li>
                            <li class = "list-group-item">Email: <a href = "mailto:${email.com}">${email.com}</a></li>
                            <li class = "list-group-item">Office #: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
                `;
            })
            .join('')}   
    `;
};

module.exports = templateData => {

}