function generateMarkdown(data, git) {
  return `
# ${data.title}

<img src="${git.avatar_url}" alt="github user pic">

## Description

${data.description}

## Table of Contents

- Installation
- Usage
- License
- Contributing
- Tests
- Further Contact

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Further Contact

If you have any enquires, please feel free to send email to ${data.email}
<a url="github.com/${data.username}">${data.username}</a>`
}

module.exports = generateMarkdown;
