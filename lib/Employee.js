function generateEmployeeCard(teamMember){

}
function generateEmployeeTeam(team){
    return team.map(generateEmployeeTeam).join()
}
function generateReport(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="row">
            <div class="team-area col 12 d-flex justify-content-center">
                ${generateEmployeeTeam(team)}
            </div>
    </body>
    </html>
}