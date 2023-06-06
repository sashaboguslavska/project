
const page = document.getElementsByClassName('pages');

const image = document.getElementById('h_imge');

let text = document.getElementById('name');


for(i of page){
  i.addEventListener("click",function(e){
    var page_choice = e.target.id;

    if(page_choice == "cactus"){
        text.textContent = "Cactus plants"
        image.src = "img3.jpg"
      }

        if(page_choice == "succulent"){
            text.textContent = "Succulent plants"
            image.src = "img2.jpg"
        }

        if(page_choice == "climbing"){
            text.textContent = "Climbing plants"
        }

        if(page_choice == "bulbous_type"){
            text.textContent = "Bulbous type plants"
        }

        if(page_choice == "palm"){
            text.textContent = "Indor palm plants"
          }


  })
}
