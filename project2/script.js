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
        const b = document.querySelectorAll('button:not(#clear, #menu_btn)')
        for (o of b){
          selected.push(o)
        }//array wit all buttons with id and class name
        console.log(selected)
        Check(selected)
         //function to check if there are 5 buttons with the same classnames in a row
    }) 
   
}

function Clear(){
    const b = document.querySelectorAll('button:not(#clear, #menu_btn)')  
    for(i of b){
        i.className = "btn"
    }
    selected=[]
    console.log(selected)
}

function Check(selected){ 
 
   
}

let menuCount=0;
function Menu(){
    if(menuCount==0){
       for(i=1; i<4; i++){
     document.getElementById('theme'+i).className = ' display_theme'
     
     }
     document.getElementById("options").className = ' display_options' 
     document.getElementById('menuimg').src="up-arrow.png"
     menuCount++
    }
    else{
        for(i=1; i<4; i++){
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
    
     if (brightness < 60 && brightness>15) {
        document.getElementById("page").style.color = "white";
        document.getElementById("clear").style.color = "white";
        document.getElementById('menu_btn').style.backgroundColor = "white"
        document.getElementById("clear").style.boxShadow= "0px 0px 25px 0px rgba(0, 0, 0, 1)"
     document.getElementById('options').style.boxShadow = "0px 20px 41px -9px rgba(0, 0, 0, 1)"
     document.getElementById('header').style.boxShadow = "0px 16px 41px -9px rgba(0, 0, 0, 1)"
     
     
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.borderColor = "white";
          }
      
      return;
    }
     else if (brightness <15){
        document.getElementById("page").style.color = "white";
        document.getElementById("clear").style.color = "white";
        document.getElementById('menu_btn').style.backgroundColor = "white"
        document.getElementById("clear").style.boxShadow= "0px 0px 25px 0px grey"
        document.getElementById('options').style.boxShadow = "0px 20px 41px -9px grey"
        document.getElementById('header').style.boxShadow = "0px 16px 41px -9px grey"
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.borderColor = "white";
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

  function Dinosaurs(){

  }