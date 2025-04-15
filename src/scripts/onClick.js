function onClick(event, player){
    let x = event.target.id;
    let xcoordinate = x.substring(1,2)
    let ycoordinate = x.substring(2)
    player.gameboard.receiveAttack([xcoordinate,ycoordinate])
    if(player.gameboard.board[xcoordinate][ycoordinate]=="x"){
       document.getElementById(event.target.id).innerHTML="O"
    } else {
       document.getElementById(event.target.id).innerHTML="X"
       if(player.gameboard.board[xcoordinate][ycoordinate].validateSunk==true){
         console.log("Ship sunk!")
       }
    }
}

export default onClick