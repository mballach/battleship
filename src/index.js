import "./styles.css";
import Player from "./scripts/player";
import Ship from "./scripts/ship";
import renderBoards from "./scripts/renderBoards";

const board1 = document.getElementById('board1')
const board2 = document.getElementById('board2')

const player1 = new Player()
player1.gameboard.place(new Ship(5),[0,0],"h")
const player2 = new Player()
player2.gameboard.place(new Ship(3),[0,0],"v")


renderBoards(board1, board2, player1,player2)


