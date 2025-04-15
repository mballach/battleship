import onClick from "./onClick";

function renderBoards(b1,b2,p1,p2){
    for (let i = 0; i<10 ; i++){
        let newRow = document.createElement('div');
        newRow.setAttribute('class','boardrow')
        for (let j = 0; j<10;j++){
            let newCell = document.createElement('div')
            newCell.setAttribute('id',"a"+i+j)
            newCell.setAttribute('class','cell unclicked')
            newCell.addEventListener("click",(e)=>onClick(e,p1),{once:true})
            newRow.append(newCell)

        }
        b1.append(newRow)
    }
    for (let i = 0; i<10 ; i++){
        let newRow = document.createElement('div');
        newRow.setAttribute('class','boardrow')
        for (let j = 0; j<10;j++){
            let newCell = document.createElement('div')
            newCell.setAttribute('id',"b"+i+j)
            newCell.setAttribute('class','cell unclicked')
            newCell.addEventListener("click",(e)=>onClick(e,p2),{once:true})
            newRow.append(newCell)
        }
        b2.append(newRow)
    }
}

export default renderBoards