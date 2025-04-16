import Ship from "./ship";
import logToDOM from "./logToDOM";

const log = document.getElementById('log')

function placeUserShips(event,player){
    let x = event.target.id;
    let xcoordinate = parseInt(x.substring(1,2))
    let ycoordinate = parseInt(x.substring(2))
    console.log(player.gameboard.shipReserve)
    logToDOM(log,"Ship of length "+player.gameboard.shipReserve[player.gameboard.ships.length]+" placed successfully!")
    console.log()
    player.gameboard.place(new Ship(player.gameboard.shipReserve[player.gameboard.ships.length]),[xcoordinate,ycoordinate],player.gameboard.orientation)   
    console.log(player.gameboard.ships)
    console.log(player.gameboard.shipReserve)
}
export default placeUserShips