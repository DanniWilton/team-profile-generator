// grabs info from prompts
// creates different cards
const fs = require(fs)

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
// function that creates index . html (new index.html is created)

// use html template literal, which has container for the card which has the card array = data 
// create an array of the divs

// function that writes html 
//   function writeToFile(data) {
//     fs.writeFile("./dist/index.html", data, (err) =>
//     err? console.error(err) : console.log("YAY! YOUR TEAM PROFILE HAS BEEN GENERATED!!!"))
//   }