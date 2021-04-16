// Thsi function returns a license badge based on which license is passed in, and
// if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE"){
    return `![License badge](https://img.shields.io/badge/License-${license}-blue.svg)`    
  }
  return ""
}

//This function returns the choosen license link, and 
//if there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license !== "NONE"){
    return `
* [License](#license)
`    
  }
  return ""
}

//This function returns the license section on the README, and 
//if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return `
## License
This project is license under ${license} license. 
For more information about this ${license} license, please click  
[License Link](https://opensource.org/licenses/${license})`
  }
  return ""
}

//Thsi function generates the markdowns for the README
function generateMarkdown(data) {
  return `# ${data.Title}

${renderLicenseBadge(data.license)}
  
## Description 
  ${data.Description}

## Table of Content (test) 

* [Installation](#installation)

* [Usage](#usage)

* [Crontribution](#contribution)

* [Tests](#tests)

${renderLicenseLink(data.license)}

* [Questions](#questions)

## Installation
Please follow these steps in order to install the dependencies that enable the application: 
${data.Installation}

## Usage
The following are instructions on how this application works:
${data.Usage}

## Contribution
The following were contributors to this project: 
${data.Contribution}
  
## Tests
To run the test, please run the following command: 
${data.Tests}

${renderLicenseSection(data.license)}

## Questions
For questions about this project please contact ${data.UserName} by
* email at ${data.Email} or 
* Github Profile (https://github.com/${data.UserName}) 
`;
}

module.exports = generateMarkdown;
