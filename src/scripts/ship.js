import logToDOM from "./logToDOM";

const log = document.getElementById('log')

class Ship{
    constructor(length, name){
        this.length = length;
        this.name = name;
        this.hits = 0;
        this.isSunk=false;
    }

    hit(){
        this.hits+=1
        this.validateSunk()
    }

    validateSunk(){
        if(this.hits>=this.length){
            this.isSunk=true;
            logToDOM(log,"Ship is sunk!")
            return true;
        } else{
            return false;
        }
    }


}

export default Ship