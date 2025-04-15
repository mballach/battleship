class Gameboard{
    constructor(){
        this.ships=[]
        this.board=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]

    }
    place(ship,coordinate,orientation){
        this.ships.push(ship)
        if(orientation == "v"){
            for (let i = 0;i<ship.length;i++){
                this.board[coordinate[0]+i][coordinate[1]]=ship
            } 
        } else if(orientation == "h"){
            for (let i = 0;i<ship.length;i++){
                this.board[coordinate[0]][coordinate[1]+i]=ship
            } 
        }
    }

    receiveAttack(coordinate){
        if(this.board[coordinate[0]][coordinate[1]]==""){
            this.board[coordinate[0]][coordinate[1]]="x"
            console.log("Miss at ["+coordinate[0]+","+coordinate[1]+"]")
            return
        }
        if(typeof (this.board[coordinate[0]][coordinate[1]]) == 'object'){
            console.log("Hit at ["+coordinate[0]+","+coordinate[1]+"]!")
            this.board[coordinate[0]][coordinate[1]].hit()
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
        console.log("All ships sunk!")
        return true
    }
}

export default Gameboard