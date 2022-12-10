const btnTeam = document.getElementById("btn_equipos")
const btnTable = document.getElementById("btn_tabla")
const conteinerTeam = document.getElementById("div_equipos")
const conteinerTable  = document.getElementById("div_tabla")


btnTeam.addEventListener("click",()=>{
    showTeam()
})
btnTable.addEventListener("click",()=>{
    showTable()
})

function showTeam (){
    conteinerTable.innerHTML=``
    conteinerTeam.innerHTML=``
    fetch('/equipos.json')
    .then((res)=>res.json())
    .then((data) => {
        data.forEach((equipo)=>{
            const teamDiv = document.createElement("div")
            teamDiv.className ="row justify-content-around p-0" 
            teamDiv.innerHTML = 
            `
                <div class="col-md-4 bg-light p-3">
                    <h1 class="text-center p-1" >${equipo.team_name}</h1>
                    <img class="img-fluid border shadow w-50" src="${equipo.team_logo}">
                </div>
                <div class="col-md-4 list-unstyled bg-info">
                    <h1>JUGADORES</h1>
                    <ui><li>${equipo.players.player1}</li></ui>
                    <ui><li>${equipo.players.player2}</li></ui>
                    <ui><li>${equipo.players.player3}</li></ui>
                    <ui><li>${equipo.players.player4}</li></ui>
                    <ui><li>${equipo.players.player5}</li></ui>
                </div>
                <hr class="m-3">
            ` 
            conteinerTeam.append(teamDiv)
        })
    })
}



function showTable (){
    conteinerTeam.innerHTML=``
    conteinerTable.innerHTML=``
    fetch('/equipos.json')
    .then((res)=>res.json())
    .then((data) => {
        const tableDiv = document.createElement("div")
        tableDiv.className ="row" 
        const table   = document.createElement("table");
        const tblBody = document.createElement("tbody");
        tblBody.className = "text-center"

            // Creo la fila donde estan los titulos
        const datesNames = document.createElement("tr");
        tblBody.appendChild(datesNames);

            // Creo cada columna donde van a estar los titulos de las celdas
        const nameCell = document.createElement("td");
        const wonCell = document.createElement("td");
        const lostCell = document.createElement("td");
        const tiedCell = document.createElement("td");
        const pointsCell = document.createElement("td");

            // Creo los titulos de las celdas
        nameCell.innerHTML = `<strong>Equipo</strong>`
        wonCell.innerHTML = `<strong>Partidos ganados</strong>`
        lostCell.innerHTML = `<strong>Partidos perdidos</strong>`
        tiedCell.innerHTML = `<strong>Partidos empatados</strong>`
        pointsCell.innerHTML = `<strong>Puntos</strong>`

            // Inserto los titulos en la fila 
        datesNames.appendChild(nameCell);
        datesNames.appendChild(wonCell);
        datesNames.appendChild(lostCell);
        datesNames.appendChild(tiedCell);
        datesNames.appendChild(pointsCell);

            // Recorro todo el json
        data.forEach(element => {

                // Creo una fila por cada equipo en el json
            const dates = document.createElement("tr");

                // Creo cada celda donde van a estar las stats de los equipos
            const teamNameCell = document.createElement("td");
            const teamPointsCell = document.createElement("td");
            const matchesWonCell = document.createElement("td");
            const matchesLostCell = document.createElement("td");
            const matchesTiedCell = document.createElement("td");

                // Escribo las stats en las celdas
            teamNameCell.innerHTML = `${element.team_name}`
            teamPointsCell.innerHTML = `${element.team_points}`
            matchesWonCell.innerHTML = `${element.matches_won}`
            matchesLostCell.innerHTML = `${element.matches_lost}`
            matchesTiedCell.innerHTML = `${element.matches_tied}`

                // Inserto las celdas a la fila
            dates.appendChild(teamNameCell);
            dates.appendChild(matchesWonCell);
            dates.appendChild(matchesLostCell);
            dates.appendChild(matchesTiedCell);
            dates.appendChild(teamPointsCell);

                // Inserto los datos en la tabla y la tabla en el div
            tblBody.appendChild(dates);
            table.appendChild(tblBody);
            tableDiv.appendChild(table)
        });
        table.setAttribute("border", "2");
        conteinerTable.appendChild(tableDiv);
    })
    
}

showTable()