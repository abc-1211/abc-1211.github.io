const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');

//List of questions
async function createReadme(){
    try{
        const answer = await inquirer.prompt([
            {
                message: "Enter Your Project Title:",
                name: "title"
            },
            {
                message: "Enter Your Name:",
                name: "name"
            },
            {
                message: "Enter Your Github Username:",
                name: "username"
            },
            {
                message: "Add a Description:",
                name: "description"
            },
            {
                message: "How to Install:",
                name: "installation"
            },
            {
                message: "Usage Information:",
                name: "usage"
            },
            {
                message: "Enter the License:",
                name: "license"
            },
            {
                message: "Contributes:",
                name: "contribute"
            },
            {
                message: "Info of Testing:",
                name: "tests"
            },
            {
                message: "Enter Your Email:",
                name: "email"
            }
        ]);
        
        const queryURL = `https://api.github.com/users/${answer.username}`;
        console.log(queryURL);
        const { data } = await axios.get(queryURL);
        const fileName = "README.md";
        const createFile = await writeFileAsync(fileName, generateMarkdown(answer, data));
        console.log("Success");
    } catch(error) {
        console.log(error);
    }
};  

createReadme();

