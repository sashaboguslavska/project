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
        let selected = []
        var btn_choice = e.target.id;
        var color = document.getElementById(btn_choice)
        if(color.className =='white' || color.className =='black'){
        }
        else{
            if ( clickCount == 0 ) {
                color.className = "white";
                clickCount=1;
             }
             else {
               color.className = "black";
                clickCount=0; 
             }  
        }  
        const b = document.querySelectorAll('button:not(#clear)')
        for (o of b){
          selected.push(o)
        }//array wit all buttons with id and class name
        console.log(selected)
        Check(selected)//function to check if there are 5 buttons with the same classnames in a row
    }) 
   
}

function Clear(){
    const b = document.querySelectorAll('button:not(#clear)')  
    for(i of b){
        i.className = "btn"
    }
    selected=[]
    console.log(selected)
}

function Check(selected){ 
 
   
}
