import "./styles.css";
import Player from "./scripts/player";
import Ship from "./scripts/ship";
import renderBoards from "./scripts/renderBoards";

const board1 = document.getElementById('board1')
const board2 = document.getElementById('board2')

const player1 = new Player("a")
const player2 = new Player("b")
player2.gameboard.placeCPUShips()


renderBoards(board1, board2, player1,player2)


