import logToDOM from "./logToDOM";
import onClick from "./onClick";
import placeUserShips from "./placeUserShips";

function renderBoards(b1,b2,p1,p2){
    while(b1.firstChild){
        b1.removeChild(b1.firstChild)
    };

    while(b2.firstChild){
        b2.removeChild(b2.firstChild)
    };

    if(p1.gameboard.sunk==true | p1.gameboard.sunk==true){

    }

    for (let i = 0; i<10 ; i++){
        let newRow = document.createElement('div');
        newRow.setAttribute('class','boardrow')
        for (let j = 0; j<10;j++){
            let newCell = document.createElement('div')
            newCell.setAttribute('id',"a"+i+j)
            if(p1.gameboard.shipsdown==false){
                if(p1.gameboard.board[i][j]==""){
                    newCell.setAttribute('class','cell own-pregame')
                    newCell.addEventListener("click",(e)=>
                        {placeUserShips(e,p1)
                        renderBoards(b1,b2,p1,p2)}
                        ,{once:true})
                } else{
                    newCell.setAttribute('class','cell own-ship')
                }
            } else if(p1.gameboard.board[i][j]==""){
                newCell.setAttribute('class','cell own')
            } else {
                newCell.setAttribute('class','cell own-ship')
            }
            newRow.append(newCell)

        }
        b1.append(newRow)
    }
    for (let i = 0; i<10 ; i++){
        let newRow = document.createElement('div');
        newRow.setAttribute('class','boardrow')
        for (let j = 0; j<10;j++){
            let newCell = document.createElement('div')
            newCell.setAttribute('id',"b"+i+j)
            newCell.setAttribute('class','cell unclicked')
            if(p1.gameboard.shipsdown==true && p1.gameboard.sunk==false && p2.gameboard.sunk==false){
                newCell.addEventListener("click",(e)=>{
                    onClick(e,p2)
                    p1.gameboard.cpuShot()
                },{once:true})
            }
            newRow.append(newCell)
        }
        b2.append(newRow)
    }

    if(p1.gameboard.shipsdown==true){
        logToDOM(log,"Click opponent's board to submit an attack!")
    }
    if(p2.gameboard.sunk==true){
        logToDOM(log,"All computer ships sunk, Player wins!")
    } else if (p1.gameboard.sunk==true){
        logToDOM(log,"All player ships sunk, Computer wins!")
    }
}

export default renderBoards