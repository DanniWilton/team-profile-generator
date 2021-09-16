// grabs info from prompts

// const employee = require("../index")

// creates different cards
// const employee = require('../index')
const fs = require('fs');
const { format } = require('path');
const { formatWithOptions } = require('util');
let cardArray = [];

function managerCard(manager) {
    return `
    <div class="manager">
    <h2 id="managerHead">Manager</h2>
    <h3>name:${manager.managerName}</h3>
    <h3>name:${manager.managerEmail}</h3>
    <h3>name:${manager.managerId}</h3>
    <h3>name:${manager.managerOfficeNumber}</h3>
    </div>`
}

function engineerCard(engineer) {
    return `
    <div class="engineer">
    <h2 id="managerHead">Manager</h2>
    <h3>name:${engineer.name}</h3>
    <h3>name:${engineer.email}</h3>
    <h3>name:${engineer.github}</h3>
    <h3>name:${engineer.id}</h3>
    </div>`
}

function internCard(intern) {
    return `
    <div class="intern">
    <h2 id="managerHead">Manager</h2>
    <h3>name:${intern.name}</h3>
    <h3>name:${intern.email}</h3>
    <h3>name:${intern.id}</h3>
    <h3>name:${intern.school}</h3>
    </div>`
}
// 3 functions
// function that creates the cards
// takes info / array of objects from inquirer, loops thru the objects getRole, aka newEmployee.getRole else if, run card function into array of html elements 

function createCards(newTeam) {
    let formattedEmployees = ""
    for (let i = 0; i < newTeam.length; i++) {
        console.log("newTeam length", newTeam.length)
        console.log("this is the new team html", newTeam)
        let employeeRole = newTeam[i].getRole();
        if (employeeRole === "manager"){
            formattedEmployees = formattedEmployees.concat(`<div>
            <h2>Manager</h2>
            <h3>Name: ${newTeam[i].getName()}</h3>
            <h3>Email: ${newTeam[i].getEmail()}</h3>
            <h3>ID: ${newTeam[i].id}</h3>
            <h3>Office Number: ${newTeam[i].officeNumber}</h3>
            </div>`)
        }

        if (employeeRole === "engineer") {
            formattedEmployees = formattedEmployees.concat(`<div>
            <h2>Engineer</h2>
            <h3>Name: ${newTeam[i].getName()}</h3>
            <h3>Email: ${newTeam[i].getEmail()}</h3>
            <h3>name:${newTeam[i].github}</h3>
            <h3>name:${newTeam[i].id}</h3>
            </div>`)
            
        }
        if (employeeRole === "intern") {
            formattedEmployees = formattedEmployees.concat(`<div>
            <h2>Intern</h2>
            <h3>Name: ${newTeam[i].getName()}</h3>
            <h3>Email: ${newTeam[i].getEmail()}</h3>
            <h3>name:${newTeam[i].id}</h3>
            <h3>name:${newTeam[i].school}</h3>
            </div>`)
        }
        else {
            html = cardArray.join(" <br> ")
        }
        // htmlWrite(html)
    }
    return formattedEmployees
};

function createNewHtml(data) {
    fs.writeFileSync("./dist/index.html", data, (error) =>
    error ? console.log(error) : console.log("team profile created!"))
    return data;
}

function htmlWrite(newTeam) {
    // console.log("this is card array", newTeam)
    data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>
            ${createCards(newTeam)}
        </div>
    </body>
    </html>`,
    { parser: "html" }
    createNewHtml(data)
}

module.exports = htmlWrite
// function that creates index . html (new index.html is created)

// use html template literal, which has container for the card which has the card array = data 
// create an array of the divs

// function that writes html 
//   function writeToFile(data) {
//     fs.writeFile("./dist/index.html", data, (err) =>
//     err? console.error(err) : console.log("YAY! YOUR TEAM PROFILE HAS BEEN GENERATED!!!"))
//   }