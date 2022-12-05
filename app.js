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
    fetch('/equipos.json')
    .then((res)=>res.json())
    .then((data) => {
            console.log(data)
            const tableDiv = document.createElement("div")
            tableDiv.className ="row justify-content-around" 
            const table   = document.createElement("table");
            const tblBody = document.createElement("tbody");

            for (let i = 0; i< data.length; i++) {
                const row = document.createElement("tr");

                for (let j = 0; j < data.length; j++) {
                    const cell = document.createElement("td");

                    if (j == 0 ){
                        cell.innerHTML = `${data[i].team_name}`
                    }if(j > 0 ){
                        cell.innerHTML = `fila ${i} columna ${j}`
                    }
                    
                    row.appendChild(cell);
                }

                tblBody.appendChild(row);
            }
            console.log(tblBody)
            for (let j = 0; j < data.length; j++) {
                const row = document.createElement("tr");
                const cell = document.createElement("td");
                cell.innerHTML = ``


                row.insertBefore(cell);
            }
            table.appendChild(tblBody);
            table.setAttribute("border", "2");
            tableDiv.appendChild(table)
            conteinerTable.appendChild(tableDiv);

    })
    
}

showTable()