import Ship from "../assets/ship.js";

test('Test ship length initialization',() =>{
    let x = new Ship(3,'destroyer')
    expect(x.length).toBe(3)
})

test('test ship hits initialization == 0',() =>{
    let x = new Ship()
    expect(x.hits).toBe(0)
})

test('test ship hits method increments hits',() =>{
    let x = new Ship()
    x.hit()
    expect(x.hits).toBe(1)
})


test('test ship name initialization',() =>{
    let x = new Ship(3,'destroyer')
    expect(x.name).toBe('destroyer')
})

test('test ship is Sunk validation',() =>{
    let x = new Ship(3)
    x.hit()
    x.hit()
    x.hit()
    expect(x.isSunk).toBe(true)
})

test('test ship is not Sunk validation',() =>{
    let x = new Ship(4)
    expect(x.isSunk).toBe(false)
})
