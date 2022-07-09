const generateBadge = license => {
    switch(license[0]){
        case "MIT License":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
            case "Apache License 2.0":
                return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-red.svg)](https://opensource.org/licenses/Apache-2.0)"
                case "GNU General Public License v3.0":
                    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
};
// create project data template
const generateMD = projectData => {
    const { project, username, email } = projectData;
    const { title, license, description, install, use, contribution, test } = project;
    const licenseBadge = generateBadge(license);

    return `
# ${title}
${licenseBadge}
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
Comments, suggestions, questions? Contact me at: [${email}](mailto:${email})
    `;
};
module.exports = { generateMD };