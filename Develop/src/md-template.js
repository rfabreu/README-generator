// create project data template
module.exports = projectData => {
    const { project, username, email } = projectData;
    const { title, licenseBadge, description, install, use, contribution, test } = project;

    return `
# ${title}
${licenseBadge}
- [${title}](#${title})
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
${description}
## Installation
${install}
## Usage
${use}
## Contributing
${contribution}
## Tests
${test}
## Questions
GitHub: [github.com/${username}](https://github.com/${username})
Comments, critiques, questions? Contact me at: [${email}](mailto:${email})
    `;
};