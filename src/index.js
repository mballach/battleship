import "./styles.css";
import Player from "./scripts/player";
import Ship from "./scripts/ship";
import renderBoards from "./scripts/renderBoards";

var board1 = document.getElementById('board1')
var board2 = document.getElementById('board2')
const toggle = document.getElementById('toggle')

var player1 = new Player("a")
var player2 = new Player("b")
player2.gameboard.placeCPUShips()

toggle.addEventListener('click',()=> {
    player1.gameboard.toggleOrientation();
    renderBoards(board1, board2, player1,player2)
})

renderBoards(board1, board2, player1,player2)
