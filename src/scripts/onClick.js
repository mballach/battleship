import logToDOM
 from "./logToDOM";
function onClick(event, player){
    let x = event.target.id;
    let xcoordinate = x.substring(1,2)
    let ycoordinate = x.substring(2)
    player.gameboard.receiveAttack([xcoordinate,ycoordinate])
    if(player.gameboard.board[xcoordinate][ycoordinate]=="x"){
       document.getElementById(event.target.id).innerHTML="O"
       document.getElementById(event.target.id).setAttribute('class',"cell clicked-miss")
    } else {
       document.getElementById(event.target.id).innerHTML="X"
       document.getElementById(event.target.id).setAttribute('class',"cell clicked-hit")
    }
}

export default onClick