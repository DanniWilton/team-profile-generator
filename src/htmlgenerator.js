// grabs info from prompts

// const employee = require("../index")

// creates different cards
const employee = require('../index')
const fs = require('fs');
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
    for (let i = 0; i < newTeam.length; i++) {
        console.log("newTeam length", newTeam.length)
        console.log("this is the new team html", newTeam)
        const newCard = newTeam[i]
        console.log("this is new card html", newCard)
        const employeeRole = newCard.getRole();
        console.log("this is employeeRole", employeeRole)
        if (employeeRole === "Manager"){
            let newManager = managerCard(newCard);
            console.log("newManager = ", newManager)
            cardArray.push(newManager)
        }

        if (employeeRole === "Engineer") {
            let newEngineer = engineerCard(newCard);
            console.log("newEngineer html = ", newEngineer)
            cardArray.push(newEngineer)
        }
        if (employeeRole === "Intern") {
            let newIntern = internCard(newCard);
            console.log("newIntern html = ", newIntern)
            cardArray.push(newIntern)
        }
        else {
            html = cardArray.join(" <br> ")
        }
        htmlWrite(html)
    }
};

function createNewHtml(data) {
    fs.writeFile("./dist/index.html", data, (error) =>
    error ? console.log(error) : console.log("team profile created!"))
}

function htmlWrite(cardArray) {
    console.log("this is card array", cardArray)
    console.log("htmlWrite Start")
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
            ${cardArray}
        </div>
    </body>
    </html>`;
createNewHtml(data)
}

module.exports = createCards
// function that creates index . html (new index.html is created)

// use html template literal, which has container for the card which has the card array = data 
// create an array of the divs

// function that writes html 
//   function writeToFile(data) {
//     fs.writeFile("./dist/index.html", data, (err) =>
//     err? console.error(err) : console.log("YAY! YOUR TEAM PROFILE HAS BEEN GENERATED!!!"))
//   }