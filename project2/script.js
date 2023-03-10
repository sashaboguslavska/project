const cells = []

//Changable properties
var tableSize = 18
var winCon = 5
var colors = {
    color1 : "rgba(255, 255, 255)",
    color2 : "rgba(0, 0, 0, 1"
}

//end of changable properties


var gameEnd = []
var winCheckOrder = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1],
]
var tileStyle = {
    size: innerHeight/tableSize,
    margin: 1
}
var currentTurn = "x"
var tiles = []
var mouse = {
    x : undefined,
    y: undefined
}


for(i = 0; i < tableSize; i++) {
    tiles.push([])
    for (o = 0; o < tableSize; o++) {
        tiles[i].push({type: "n"})
        
    }
}

for (let i = 0; i < tableSize; i++) {
     elemTr = $("<tr></tr>")
    for (let o = 0; o < tableSize; o++) {
        elemTd = $(`<td id="${i}-${o}" onclick="clickHandler(${i}, ${o})"></td>`)
        $(elemTr).append(elemTd)
        const btn = document.createElement("button")
        btn.textContent = ""
        btn.className = "btn"
        elemTd.append(btn)
       cells.push(btn) 
       elemTr.append(elemTd) 
    }
    $("table").append(elemTr)
}

for( let i =0; i<cells.length; i++){
    cells[i].id = i
}

const buttons = document.getElementsByClassName('btn');
for (i of buttons){
    clickCount = 0
    i.addEventListener("click", function(e){
        let selected = []
        var btn_choice = e.target.id;
        var btn_color = document.getElementById(btn_choice)
        if(btn_color.className=='btn'){
            if(btn_color.className =='white' || btn_color.className =='black'){

            }
            else {
                if ( clickCount == 0 ) {
                    btn_color.className = "white";
                    clickCount=1;
                 }
                 else {
                    btn_color.className = "black";
                    clickCount=0; 
                 }  
            }
        }
        else if(btn_color.className == 'btn_blue_green'){
            if(btn_color.className =='blue' || btn_color.className =='green'){

            }
            else{
                if ( clickCount == 0 ) {
                    btn_color.className = "blue";
                    clickCount=1;
                 }
                 else {
                    btn_color.className = "green";
                    clickCount=0; 
                 }  
            }  
        } 
        else if(btn_color.className == 'btn_pink_violet'){
            if(btn_color.className =='pink' || btn_color.className =='violet'){

            }
            else{
                if ( clickCount == 0 ) {
                    btn_color.className = "pink";
                    clickCount=1;
                 }
                 else {
                    btn_color.className = "violet";
                    clickCount=0; 
                 }  
            }  
        } 
        else if(btn_color.className == 'btn_red_yellow'){
            if(btn_color.className =='red' || btn_color.className =='yellow'){

            }
            else{
                if ( clickCount == 0 ) {
                    btn_color.className = "red";
                    clickCount=1;
                 }
                 else {
                    btn_color.className = "yellow";
                    clickCount=0; 
                 }  
            }  
        }  
        const b = document.querySelectorAll('button:not(#clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn)')
        for (o of b){
          selected.push(o)
        }
    }) 
   
}
function clickHandler(y, x){

    if(tiles[y][x].type == "n"){
        if(gameEnd.length <= 2){
            if(currentTurn == "x"){
                currentTurn = "o"
            } else{
                currentTurn = "x"
            }
        }
       
        tiles[y][x].type = currentTurn
        
    }
    checkWin([x, y])
    

    return [x, y]
}



function Clear(){
    const b = document.querySelectorAll('button:not(#clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn)')  
    for(i of b){
        i.className = "btn"
    }
    selected=[]
    console.log(selected)
}


let menuCount=0;
function Menu(){
    if(menuCount==0){
       for(i=1; i<3; i++){
     document.getElementById('theme'+i).className = ' display_theme'
     
     }
     document.getElementById("options").className = ' display_options' 
     document.getElementById('menuimg').src="up-arrow.png"
     menuCount++
    }
    else{
        for(i=1; i<3; i++){
      document.getElementById('theme'+i).className = 'theme_closed'
      
      } 
      document.getElementById("options").className = 'options_closed'
      document.getElementById('menuimg').src="down-arrow.png"

      menuCount=0
     }
  
 
   
}

function Background(){
    var colorPicker = document.getElementById("color-picker");
    var table = document.getElementById("board");
    var color = colorPicker.value;
    var tds = table.getElementsByTagName("td");
    var rgb = hexToRgb(color);
    var brightness = calculateBrightness(rgb);
     document.getElementById("options").style.backgroundColor = color; 
     document.getElementById("clear").style.backgroundColor = color; 
     document.getElementById("page").style.backgroundColor = color;
    
     if (brightness < 60 && brightness>20) {
        document.getElementById("page").style.color = "white";
        document.getElementById("clear").style.color = "white";
        document.getElementById('menu_btn').style.backgroundColor = "white"
        document.getElementById("clear").style.boxShadow= "0px 0px 25px 0px rgba(0, 0, 0, 1)"
     document.getElementById('options').style.boxShadow = "0px 20px 41px -9px rgba(0, 0, 0, 1)"
     document.getElementById('header').style.boxShadow = "0px 16px 41px -9px rgba(0, 0, 0, 1)"
     
     
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.borderColor = "grey";
          }
      
      return;
    }
     else if (brightness <20){
        document.getElementById("page").style.color = "white";
        document.getElementById("clear").style.color = "white";
        document.getElementById('menu_btn').style.backgroundColor = "white"
        document.getElementById("clear").style.boxShadow= "0px 0px 25px 0px grey"
        document.getElementById('options').style.boxShadow = "0px 20px 41px -9px grey"
        document.getElementById('header').style.boxShadow = "0px 16px 41px -9px grey"
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.borderColor = "grey";
          }
    } 
    
     
    else{
      document.getElementById("page").style.color = "black";   
     document.getElementById("clear").style.color = "black"; 
     document.getElementById('menu_btn').style.backgroundColor = color;
     document.getElementById("clear").style.boxShadow= "0px 0px 25px 0px rgba(0, 0, 0, 1)"
     document.getElementById('options').style.boxShadow = "0px 20px 41px -9px rgba(0, 0, 0, 1)"
     document.getElementById('header').style.boxShadow = "0px 16px 41px -9px rgba(0, 0, 0, 1)"
     
     for (var i = 0; i < tds.length; i++) {
        tds[i].style.borderColor = "black";
      }
      
    }
   
}
function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return {r: r, g: g, b: b};
  }
  
  function calculateBrightness(rgb) {
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  }

  function Black_white(){
    const b1 = document.querySelectorAll('button:not(.btn, .black, #clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .green, .btn_blue_green, .btn_pink_violet, .violet, .yellow, .btn_red_yellow');
    for (var i = 0; i < b1.length; i++) {
       b1[i].className = "white";
     }
     const b2 = document.querySelectorAll('button:not(.white, .btn, #clear, #menu_btn, #new_game, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .btn_blue_green, .btn_pink_violet, .pink, .red, .btn_red_yellow')
    for (var i = 0; i < b2.length; i++) {
       b2[i].className = "black";
     }
     const btns = document.querySelectorAll('button:not(.white, .black, #clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .green, .pink, .violet, .red, .yellow');
     for(var i = 0; i < btns.length; i++){
       btns[i].className = 'btn'
     }
  }

  function Blue_green(){
    
  const b1 = document.querySelectorAll('button:not(.btn, .black, #clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn,  .green, .btn_blue_green, .btn_pink_violet, .violet, .btn_red_yellow, .yellow');
 for (var i = 0; i < b1.length; i++) {
    b1[i].className = "blue";
  }
  const b2 = document.querySelectorAll('button:not(.white, .btn, #clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .btn_blue_green, .btn_pink_violet, .pink, .btn_red_yellow, .red')
 for (var i = 0; i < b2.length; i++) {
    b2[i].className = "green";
  }
  const btns = document.querySelectorAll('button:not(.white, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .green, .pink, .violet, .red, .yellow ');
  for(var i = 0; i < btns.length; i++){
    btns[i].className = 'btn_blue_green'
  }
}
function Pink_violet(){
    
    const b1 = document.querySelectorAll('button:not(.btn, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .green, .btn_blue_green, .btn_pink_violet, .violet, .btn_red_yellow, .yellow');
   for (var i = 0; i < b1.length; i++) {
      b1[i].className = "pink";
    }
    const b2 = document.querySelectorAll('button:not(.white, .btn, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .btn_blue_green, .btn_pink_violet, .pink, .btn_red_yellow, .red')
   for (var i = 0; i < b2.length; i++) {
      b2[i].className = "violet";
    }
    const btns = document.querySelectorAll('button:not(.white, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .green, .pink, .violet, .red, .yellow');
    for(var i = 0; i < btns.length; i++){
      btns[i].className = 'btn_pink_violet'
    }
  }
  function Red_yellow(){
    
    const b1 = document.querySelectorAll('button:not(.btn, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .btn_red_yellow, .green, .btn_blue_green, .btn_pink_violet, .violet, .yellow');
   for (var i = 0; i < b1.length; i++) {
      b1[i].className = "red";
    }
    const b2 = document.querySelectorAll('button:not(.white, .btn, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .btn_red_yellow, .blue, .btn_blue_green, .btn_pink_violet, .pink, .red')
   for (var i = 0; i < b2.length; i++) {
      b2[i].className = "yellow";
    }
    const btns = document.querySelectorAll('button:not(.white, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .green, .pink, .violet, .red, .yellow');
    for(var i = 0; i < btns.length; i++){
      btns[i].className = 'btn_red_yellow'
    }
  }




  function checkWin(pos){
    // X
    startCoor = {x:pos[0], y:pos[1]}

    // horiz
    counter = 0
    for (let i = 0; i < tableSize; i++) {
        if(tiles[startCoor.y][i].type == currentTurn){
            counter++
            if(counter == winCon){
                gameEnd[2] = startCoor.y
                gameEnd[3] = i
                break
            } else if(counter == 1){
                gameEnd[0] = startCoor.y
                gameEnd[1] = i
                console.log(gameEnd)
            }
        } else{
            counter = 0
        }
    }

    //vert
    counter = 0

    for (let i = 0; i < tableSize; i++) {
        if(tiles[i][startCoor.x].type == currentTurn){
            counter++
            if(counter == winCon){
                gameEnd[2] = i
                gameEnd[3] = startCoor.x
                break
            } else if(counter == 1){
                gameEnd[0] = i
                gameEnd[1] = startCoor.y
                console.log(gameEnd)
            }
        } else{
            counter = 0
        }
    }

    //diag left right down

    counter = 0

    if(startCoor.x <= startCoor.y){
        initX = 0
        initY = startCoor.y-startCoor.x
    } else{
        initY = 0
        initX = startCoor.x-startCoor.y
    }

    while (initX < tableSize && initY < tableSize) {
        
        if(tiles[initY][initX].type == currentTurn){
            counter++
            if(counter == winCon){
                gameEnd[2] = initY
                gameEnd[3] = initX
                break
            } else if(counter == 1){
                gameEnd[0] = initY
                gameEnd[1] = initX
                console.log(gameEnd)
            }
        } else{
            counter = 0
        }
        
        initX++
        initY++
    }

    //diag left right up

    counter = 0

    initX = startCoor.x
    initY = startCoor.y
    while (initX > 0 && initY < tableSize-1) {
        initX--
        initY++
    }
    
    while (initX < tableSize && initY >= 0) {
        if(tiles[initY][initX].type == currentTurn){
            counter++
            if(counter == winCon){
                gameEnd[2] = initY
                gameEnd[3] = initX
                break
            } else if(counter == 1){
                gameEnd[0] = initY
                gameEnd[1] = initX
                console.log(gameEnd)
            }
        } else{
            counter = 0
        }
        
        initX++
        initY--
    }
    
    if(gameEnd.length > 2){
       const btns = document.querySelector('button:not(.white, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .green, .pink, .violet, .red, .yellow ');
      

       if(btns.className=='btn'){
        let text = (currentTurn == "o" ? "White" : "Black") + " won"
        setTimeout(function() {
            document.getElementById('alert').className = "alert_display" 
             document.getElementById('text').innerHTML = text
           }, 250)
       }
       else if(btns.className=='btn_blue_green'){
        let text = (currentTurn == "o" ? "Blue" : "Green") + " won"
        setTimeout(function() {
            document.getElementById('alert').className = "alert_display" 
             document.getElementById('text').innerHTML = text
           }, 250)
       }
       else if(btns.className=='btn_pink_violet'){
        let text = (currentTurn == "o" ? "Pink" : "Violet") + " won"
        setTimeout(function() {
            document.getElementById('alert').className = "alert_display" 
             document.getElementById('text').innerHTML = text
           }, 250)
       }
       else if(btns.className=='btn_red_yellow'){
        let text = (currentTurn == "o" ? "Red" : "Yellow") + " won"
        setTimeout(function() {
            document.getElementById('alert').className = "alert_display" 
             document.getElementById('text').innerHTML = text
           }, 250)
       }
        
    }

}