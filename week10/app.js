const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const question = require("./lib/question");

const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function generateTemplate() {
    try {
        // Ask whether user want to create a new html file
        const { createNewHTML } = await inquirer.prompt(question.newHTML);
        if (createNewHTML === "No") {
            console.log("Ok, hope to see you again!");
        };
        // Ask the number of people adding
        let { numDataAdd } = await inquirer.prompt(question.newTXT);
        // Array for data input by user
        const personlist = [];
        // Ask depends on the people wanted to add
        for (i = 0; i < numDataAdd; i++) {
            console.log(`\n\n-----   Entering New Person Data   -----\n`);
            // Get data back from prompt
            let { post } = await inquirer.prompt(question.postquestion);
            let { name, ID, email } = await inquirer.prompt(question.commonQuestion);
            // Different post have different question
            if (post === "engineer" || post === "employee") {
                let { postdata } = await inquirer.prompt(question.employee);
                // Pass data to other js file
                let person = new Engineer (name, ID, email, postdata);
                personlist.push(person);
            } else if (post === "manager") {
                let { postdata } = await inquirer.prompt(question.manager);
                let person = new Manager (name, ID, email, postdata);
                personlist.push(person);
            } else if (post === "intern") {
                let { postdata } = await inquirer.prompt(question.intern);
                let person = new Intern (name, ID, email, postdata);
                personlist.push(person);
            }
        }
        // Create File
        const htmlContent = render(personlist);
        const htmlFile = await writeFileAsync(outputPath, htmlContent);
        console.log("Successfully Created HTML File!!!");
    }
    catch (error) {
        console.log(error);
    }
}

generateTemplate();