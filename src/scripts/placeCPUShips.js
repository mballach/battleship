function placeCPUShips(player){
    while (player.gameboard.ships.length<5){
        let x = new Ship(player.shipReserve[player.gameboard.ships.length])
        let xcoor = Math.floor(Math.random() * 9)
        let ycoor = Math.floor(Math.random() * 9)
        player.gameboard.place(x,[xcoor,ycoor])
    }
}

export default CPUShips