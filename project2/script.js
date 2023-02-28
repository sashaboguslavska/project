const cells = []
for (let row = 0; row<18; row++){
    const tr = document.createElement('tr') 
    for (let col = 0; col<18; col++){
        const td = document.createElement('td')
        const btn = document.createElement("button")
        btn.textContent = ""
        btn.className = "btn"
        td.append(btn)
        cells.push(btn) 
        tr.append(td) 
    }
    board.append(tr) 
}

for (let i = 0; i < cells.length; i++){
    cells[i ].id = i
} 

const buttons = document.getElementsByClassName('btn');
for (i of buttons){
    clickCount = 0
    i.addEventListener("click", function(e){
        var btn_choice = e.target.id;
        var color = document.getElementById(btn_choice)
        if(color.id =='black' || color.id =='white'){
        }
        else{
            if ( clickCount == 0 ) {
           
                color.style.backgroundColor = "black";
                clickCount=1;
                color.id = "black"
             }
             else {
                color.style.backgroundColor = "white";
                clickCount=0;
                color.id = "white"
             }  
        } 
    }) 
}