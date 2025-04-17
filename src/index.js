import "./styles.css";
import Player from "./scripts/player";
import Ship from "./scripts/ship";
import renderBoards from "./scripts/renderBoards";

var board1 = document.getElementById('board1')
var board2 = document.getElementById('board2')

var player1 = new Player("a")
var player2 = new Player("b")
player2.gameboard.placeCPUShips()

renderBoards(board1, board2, player1,player2)
