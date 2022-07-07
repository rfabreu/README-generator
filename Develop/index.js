const inquirer = require('inquirer');

const generateMD = require('./src/md-template');
const { writeFile } = require('./utils/generateMarkdown');


const promptUser = () => {
    console.log(`
    ====================
    Add Your Information
    ====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter your email address!');
                    return false;
                }
            }
        },
    ]);
};

const promptProject = repoData => {

    // If there's no 'project' array property, create one
    if (!repoData.project) {
        repoData.project = [];
    }
    console.log(`
    ==================================
    Add Information About This Project
    ==================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a title name for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter details about this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions for this application. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('You need to provide instructions for installing this application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'Provide usage information for this application. (Required)',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('You need to provide instructions for running this application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Show users how they can contribute to this project. (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to provide contribution guidelines for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Show other developers how to test this application. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You need to provide testing guidelines for this application!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'Which lincense is this applicaton covered under?',
            choices: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder']
        },
    ])
        .then(projectData => {
            repoData.project.push(projectData);
            return repoData;
        });
};

promptUser()
    .then(promptProject)
    .then(repoData => {
        return generateMD(repoData);
    })
    .then(readmeMD => {
        return writeFile(readmeMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });