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
    // Destructuring the page data
    let { managers, engineers, interns } = templateData;
    console.log(managers); console.log(engineers); console.log(interns);

if (!engineers && !interns) {
    showCards = `${generateManagerCards(managers)}`
}

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header class = "jumbotron">
        <h1 class = "display-3">My Team</h1>
    </header>

    <div class = "container">
        <div class = "row">
            <div class = "team-area col-12 d-flex justify-content-center">
                ${showCards}
            </div>
        </div>
    </div>
</body>
</html>
`;
};