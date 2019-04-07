

// var myPTag = document.getElementsByClassName("");


var tag = document.querySelector(".text ");



// tag.innerText = "Salam";

//  tag.innerHTML = "<i>Salam</i>";

console.log(tag.innerText);

// tag.onclick = pClick;

//  function pClick(){
//      console.log("clicked");
//  }


tag.addEventListener("click", function () {
    tag.style.color = "white";
    tag.style.backgroundColor = "black"
    // tag.setAttribute("title", "Thank You");
    // tag.removeAttribute("title");
  
   
   

    
     button.classList.toggle("show");
     if(button.classList.contains("show")){
        button.classList.remove("show");
        button.innerText="goster";
 
      }else (button.classList.add("show")); {
 
      }


});


// tag.addEventListener("mouseover", function(){
//     console.log ("hoverd");
// });


tag.addEventListener("mousemove", function () {
    console.log("p tag lorem");
});

tag.addEventListener("mouseout", function () {
    console.log("out");
});


var button = document.querySelector(".btn");


button.addEventListener("click", function () {
    tag.style.display = "block";


});


