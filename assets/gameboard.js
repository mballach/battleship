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
                this.board[coordinate[0]][coordinate[1]+1]=ship
            } 
        }
    }

    receiveAttack(coordinate){
        if(this.board[coordinate[0]][coordinate[1]]==""){
            this.board[coordinate[0]][coordinate[1]]="x"
        }
        if(typeof (this.board[coordinate[0]][coordinate[1]]) == 'object'){
            this.board[coordinate[0]][coordinate[1]].hit()
        }
    }

    allSunk(){
        for (let i = 0; i<this.ships.length;i++){
            if(this.ships[i].isSunk==false){
                return false
            }
        }
        return true
    }
}

export default Gameboard