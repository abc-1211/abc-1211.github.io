// JS file of prompt questions

const newHTML = [
    {
        type: "list",
        message: "Do you want to create a new html file?",
        name: "createNewHTML",
        choices: ["Yes","No"]
    }
]

const newTXT = [
    {
        type: "list",
        message: "How many person data you would like to add?",
        name: "numDataAdd",
        choices: [1,2,3,4,5]
    }
]

const postquestion = [
    {
        type: "list",
        message: "Enter Your Post:",
        name: "post",
        choices: [
            {
                name: "employee"
            },
            {
                name: "manager"
            },            
            {
                name: "engineer"
            },            
            {
                name: "intern"
            }
        ]
    }
]

const commonQuestion = [
    {
        message: "Enter Your Name:",
        name: "name"
    },
    {
        message: "Enter Your Staff ID:",
        name: "ID"
    },
    {
        message: "Enter Your Email:",
        name: "email"
    }
]

const manager = [
    {
        message: "Enter Office Number:",
        name: "postdata"
    }
]

const employee = [
    {
        message: "Enter Your Github ID:",
        name: "postdata"
    }
]

const intern = [
    {
        message: "Enter Your University Name:",
        name: "postdata"
    }
]

module.exports = { newHTML, newTXT, postquestion, commonQuestion, manager, employee, intern };