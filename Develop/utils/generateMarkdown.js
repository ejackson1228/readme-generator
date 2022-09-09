// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = data.license;
  let licenseBadge = '';
  if (licenseType === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }
  if (licenseType === 'Apache') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if (licenseType === 'ISC') {
    licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  }
  if (licenseType === 'Mozilla') {
    licenseBadge  = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  }
  if (licenseType === 'GNU GPL v3') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  }
  if (licenseType === 'Eclipse') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
  } else if (licenseType === '') {
    licenseBadge ='';
  }
  console.log(licenseBadge);
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseType = data.license;
  let licenseLink  = '';
  if (licenseType === 'MIT') {
    licenseLink = `(https://opensource.org/licenses/MIT)`
  }
  if (licenseType === 'Apache') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (licenseType === 'ISC') {
    licenseLink = `(https://opensource.org/licenses/ISC)`
  }
  if (licenseType === 'Mozilla') {
    licenseLink  = `(https://opensource.org/licenses/MPL-2.0)`
  }
  if (licenseType === 'GNU GPL v3') {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (licenseType === 'Eclipse') {
    licenseLink = `(https://opensource.org/licenses/EPL-1.0)`
  } else if (licenseType === '') {
    licenseLink ='';
  }
  console.log(licenseLink); 
  return licenseLink; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const badge = 
  const link = 
  console.log(badge)
  console.log(link)
  let licenseSection = '';
  if (link !== ''  && badge !== '') {
    licenseSection = badge  + 'This application is protected under the ' + data.license + '. ' + link;
    return licenseSection
  } else {
    licenseSection = '';
    return licenseSection;
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection()
  return ` ${renderLicenseBadge.licenseBadge} 
# <h1 align="center">${data.title}</h1>

## Description
${data.description}
  
## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${(renderLicenseSection.licenseSection)}

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions? Contact me:
GitHub: ${data.github} <br>
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
