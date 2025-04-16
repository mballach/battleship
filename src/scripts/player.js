import Gameboard from "./gameboard"

class Player{
    constructor(name){
        this.name=name;
        this.gameboard = new Gameboard(name)
    }
}

export default Player