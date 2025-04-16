import logToDOM from "./logToDOM"
import renderBoards from "./renderBoards"
import Ship from "./ship"

const log = document.getElementById('log')

class Gameboard{
    constructor(name){
        this.ships=[]
        this.board=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]
        this.shipsdown=false
        this.shipReserve=[5,4,3,3,2]
        this.orientation="v"
        this.shotboard=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]
        this.name=name;
        this.sunk=false;
    }
    place(ship,coordinate,orientation){
        if(orientation == "v"){
            if(ship.length+coordinate[0]>9){
                logToDOM(log, "Can't put your ship there, there's not enough space!")
                return false
            }
            for (let i = 0;i<ship.length;i++){
                if(this.board[coordinate[0]+i][coordinate[1]]!=""){
                    logToDOM(log, "Can't put your ship there, there is another one blocking the way!")
                    return false
                }
            } 
            for (let i = 0;i<ship.length;i++){
                this.board[coordinate[0]+i][coordinate[1]]=ship
            } 
            this.ships.push(ship)
            this.allShipsDown()
        } else if(orientation == "h"){
            if(ship.length+coordinate[1]>9){
                logToDOM(log, "Can't put your ship there, there's not enough space!")
                return false
            }
            for (let i = 0;i<ship.length;i++){
                if(this.board[coordinate[0]][coordinate[1]+i]!=""){
                    logToDOM(log, "Can't put your ship there, there is another one blocking the way!")
                    return false
                }
            } 
            for (let i = 0;i<ship.length;i++){
                this.board[coordinate[0]][coordinate[1]+i]=ship
            } 
            this.ships.push(ship)
            this.allShipsDown()
        }
    }

    receiveAttack(coordinate){
        if(this.board[coordinate[0]][coordinate[1]]==""){
            this.board[coordinate[0]][coordinate[1]]="x"
            /*logToDOM(log,"Miss at ["+coordinate[0]+","+coordinate[1]+"]")*/
            document.getElementById(this.name+coordinate[0]+coordinate[1]).innerHTML="O"
            return
        }
        if(typeof (this.board[coordinate[0]][coordinate[1]]) == 'object'){
            /*logToDOM(log,"Hit at ["+coordinate[0]+","+coordinate[1]+"]!")*/
            this.board[coordinate[0]][coordinate[1]].hit()
            document.getElementById(this.name+coordinate[0]+coordinate[1]).innerHTML="X"
            this.allSunk()
            return
        }
    }

    allSunk(){
        for (let i = 0; i<this.ships.length;i++){
            if(this.ships[i].isSunk==false){
                return false
            }
        }
        logToDOM(log,"All ships sunk!")
        this.sunk=true
        return true
    }

    allShipsDown(){
        if(this.ships.length==5){
            this.shipsdown=true;
            return true
        } else {
            return false
        }
    }

    toggleOrientation(){
        if(this.orientation=="h"){
            this.orientation="v"
        } else {
            this.orientation="h"
        }
    }

    placeCPUShips(){
        while (this.ships.length<5){
            let x = new Ship(this.shipReserve[this.ships.length])
            let xcoor = Math.floor(Math.random() * 9)
            let ycoor = Math.floor(Math.random() * 9)
            let orientation = Math.round(Math.random() * 1)
            if (orientation==1){
                orientation="v"
            } else {
                orientation = "h"
            }
            this.place(x,[xcoor,ycoor],orientation)
        }
        logToDOM(log, "Welcome to the game!")
    }

    cpuShot(){
        let xcoor = Math.floor(Math.random() * 9)
        let ycoor = Math.floor(Math.random() * 9)
        if(this.shotboard[xcoor][ycoor]==""){
            this.shotboard[xcoor][ycoor]="x"
            this.receiveAttack([xcoor,ycoor])
        } else {
            this.cpuShot()
        }
    }

}

export default Gameboard