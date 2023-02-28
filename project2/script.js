for (let row = 0; row<18; row++){
    const tr = document.createElement('tr') 
    for (let col = 0; col<18; col++){
        const td = document.createElement('td')
        tr.append(td)  
    }
    board.append(tr) 
}

