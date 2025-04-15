import Ship from "../../scripts/ship.js"
import Gameboard from "../../scripts/gameboard.js"

test('Test default gameboard',() =>{
    let x = new Gameboard()
    expect(x.board).toStrictEqual([["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]])
})

test('Test ship placement',() =>{
    let y = new Ship(3)
    let x = new Gameboard()
    x.place(y,[0,0],"v")
    expect(x.board[1][0]).toBe(y)
})

test('Test receiveAttack method on miss',() =>{
    let x = new Gameboard()
    x.receiveAttack([5,4])
    expect(x.board[5][4]).toBe("x")
})

test('Test receiveAttack method on hit',() =>{
    let y = new Ship(3)
    let x = new Gameboard()
    x.place(y,[0,0],"v")
    x.receiveAttack([0,0])
    expect(y.hits).toBe(1)
})

test('Test sunk',() =>{
    let x = new Gameboard()
    let y = new Ship(3)
    x.place(y,[0,0],"v")
    x.receiveAttack([0,0])
    x.receiveAttack([1,0])
    x.receiveAttack([2,0])
    expect(x.allSunk()).toBe(true)
})