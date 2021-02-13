// License array for the name/badge/info for each license. Can choose which one is appropriate for project.

const licenses = [
  {
    licenseName: 'MIT',
    badgeURL:
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    licenseURL: 'https://choosealicense.com/licenses/mit/',
  },
  {
    licenseName: 'Apache 2.0',
    badgeURL:
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    licenseURL: 'https://choosealicense.com/licenses/apache-2.0/',
  },
  {
    licenseName: 'Mozilla Public License 2.0',
    badgeURL:
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    licenseURL: 'https://choosealicense.com/licenses/mpl-2.0/',
  },
  {
    licenseName: 'GNU AGPLv3',
    badgeURL:
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    licenseURL: 'https://choosealicense.com/licenses/agpl-3.0/',
  },
  {
    licenseName: 'GNU GPLv3',
    badgeURL:
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    licenseURL: 'https://choosealicense.com/licenses/gpl-3.0/',
  },
  {
    licenseName: 'GNU LGPLv3',
    badgeURL:
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    licenseURL: 'https://choosealicense.com/licenses/lgpl-3.0/',
  },
  {
    licenseName: 'Unlicense',
    badgeURL:
      '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    licenseURL: 'https://choosealicense.com/licenses/unlicense/',
  },
];


function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(responses) {
  return `${renderLicenseBadge(responses.license)}

  # ${responses.readTitle}

  ## Description

  ${responses.readDesc}

  ## Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contribute](#contribute)

  [Testing](#testing)

  [Credits](#credits)

  [Licenses](#licenses)

  [Contact](#contact)


  ### Installation
  ${responses.readInstall}

  ### Usage
  ${responses.readUsage}

  ### Contribute
  ${responses.readContrib}

  ### Testing
  ${responses.readTest}

  ### Credits
  ${responses.readCredit}

  ### Licenses
  ${responses.chooseLicence}

  ### Contact

  Github:
  ${responses.gitHubUser}

  Email:
  ${responses.emailAddress}

`;
}

module.exports = generateMarkdown;
