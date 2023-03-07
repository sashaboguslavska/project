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
        if(color.className=='btn'){
            if(color.className =='white' || color.className =='black'){

            }
            else {
                if ( clickCount == 0 ) {
                    color.className = "white";
                    clickCount=1;
                 }
                 else {
                   color.className = "black";
                    clickCount=0; 
                 }  
            }
        }
        else if(color.className == 'btn_blue_green'){
            if(color.className =='blue' || color.className =='green'){

            }
            else{
                if ( clickCount == 0 ) {
                    color.className = "blue";
                    clickCount=1;
                 }
                 else {
                   color.className = "green";
                    clickCount=0; 
                 }  
            }  
        } 
        else if(color.className == 'btn_pink_violet'){
            if(color.className =='pink' || color.className =='violet'){

            }
            else{
                if ( clickCount == 0 ) {
                    color.className = "pink";
                    clickCount=1;
                 }
                 else {
                   color.className = "violet";
                    clickCount=0; 
                 }  
            }  
        } 
        else if(color.className == 'btn_red_yellow'){
            if(color.className =='red' || color.className =='yellow'){

            }
            else{
                if ( clickCount == 0 ) {
                    color.className = "red";
                    clickCount=1;
                 }
                 else {
                   color.className = "yellow";
                    clickCount=0; 
                 }  
            }  
        }  
        const b = document.querySelectorAll('button:not(#clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn)')
        for (o of b){
          selected.push(o)
        }//array wit all buttons with id and class name
        console.log(selected)
        Check1(selected)
        Check2(selected)
         //functions to check if there are 5 buttons with the same classnames in a row
    }) 
   
}

function Check1(selected){ 
    let count1 =1
    let count2 =1
    
 for (let i =0; i< selected.length; i++){
    let selected1 = selected[i]
    let selected2 = selected[i+1]
    let selected3 = selected[i+2]
    if(selected1.className != 'btn' && selected1.className != 'btn_blue_green' && selected1.className != 'btn_pink_violet' && selected1.className != 'btn_red_yellow'){
        if(selected1.className == selected2.className){
            if(selected1.className == 'white' || selected1.className == 'blue' || selected1.className == 'pink' ||selected1.className == 'red'){
                count1+=1 
                
            }
            if(selected1.className == 'black' || selected1.className == 'green' || selected1.className == 'violet' ||selected1.className == 'yellow'){
                count2+=1 
               
            }
            if(count1 == 5 || count2 == 5){
                let text ='Winner: '+ selected1.className
                setTimeout(function() {
                    document.getElementById('alert').className = "alert_display" 
                    document.getElementById('text').innerHTML = text
                }, 250)
                
                break; 
             }   
            
        }
        if(selected1.className != selected3.className){
            if(selected1.className == 'white' || selected1.className == 'blue' || selected1.className == 'pink' ||selected1.className == 'red'){
                count1=1 
            }
            if(selected1.className == 'black' || selected1.className == 'green' || selected1.className == 'violet' ||selected1.className == 'yellow'){
                count2=1 
            }
          
            
        }
        
      
    }
   
 }
  

}
function Check2(selected){ 
    let count1 =1
    let count2 =1
    
 for (let i =0; i< selected.length; i++){
    let selected1 = selected[i]
    let selected2 = selected[i+18]
    let selected3 = selected[i+36]
    if(selected1.className != 'btn' && selected1.className != 'btn_blue_green' && selected1.className != 'btn_pink_violet' && selected1.className != 'btn_red_yellow'){
        if(selected1.className == selected2.className){
            if(selected1.className == 'white' || selected1.className == 'blue' || selected1.className == 'pink' ||selected1.className == 'red'){
                count1+=1 
                
            }
            if(selected1.className == 'black' || selected1.className == 'green' || selected1.className == 'violet' ||selected1.className == 'yellow'){
                count2+=1 
               
            }
            if(count1 == 5 || count2 == 5){
                let text ='Winner: '+ selected1.className
                setTimeout(function() {
                    document.getElementById('alert').className = "alert_display" 
                    document.getElementById('text').innerHTML = text
                }, 250)
                
                break; 
             }   
            
        }
        if(selected1.className != selected3.className){
            if(selected1.className == 'white' || selected1.className == 'blue' || selected1.className == 'pink' ||selected1.className == 'red'){
                count1=1 
            }
            if(selected1.className == 'black' || selected1.className == 'green' || selected1.className == 'violet' ||selected1.className == 'yellow'){
                count2=1 
            }
          
            
        }
        
      
    }
   
 }
  

}

function Clear(){
    const b = document.querySelectorAll('button:not(#clear, #new_game, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn)')  
    for(i of b){
        i.className = "btn"
    }
    selected=[]
    console.log(selected)
}
function Hide(){
    document.getElementById('alert').className = "alert"
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
    
    const b1 = document.querySelectorAll('button:not(.btn, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .green, .btn_blue_green, .btn_pink_violet, .violet, .yellow');
   for (var i = 0; i < b1.length; i++) {
      b1[i].className = "red";
    }
    const b2 = document.querySelectorAll('button:not(.white, .btn, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .btn_blue_green, .btn_pink_violet, .pink, .red')
   for (var i = 0; i < b2.length; i++) {
      b2[i].className = "yellow";
    }
    const btns = document.querySelectorAll('button:not(.white, .black, #new_game, #clear, #menu_btn, #black_white_btn, #blue_green_btn, #pink_violet_btn, #red_yellow_btn, .blue, .green, .pink, .violet, .red, .yellow');
    for(var i = 0; i < btns.length; i++){
      btns[i].className = 'btn_red_yellow'
    }
  }
