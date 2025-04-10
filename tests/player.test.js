import Player from "../assets/player.js"

test('Test player initializes gameboard',() =>{
    let y = new Player("c")
    expect(y.gameboard.board[0][0]).toBe("")
})

test('Test player assigned human/computer',() =>{
    let y = new Player("p")
    expect(y.type).toBe("p")
})