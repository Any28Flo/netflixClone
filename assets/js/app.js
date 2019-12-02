//global variables
let arrayUsers = [];
let imageArray  = [
        {"src":"./assets/img/profile.png"}

]
class User{
    constructor(name, nickName, profilePicture){
        this.name = name ;
        this.nickName = nickName;
        this.profilePicture = profilePicture;
    }
    printName(){

        console.log(`Hello ${this.name}` );
    }
}
//functions
function printProfiles(){
    document.createElement(div);
    
}

document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    arrayUsers.forEach(user => {
       // var ruta= arregloImagenes[posicion].src;

      html += `<div class="card col-md-4" data-card-name="${user.name}">`;
      html += `<div class="card-text">${user.name}</div>`;
      html+= `<a href="netflix.html"><img  class="card-img-top" src =${imageArray[0].src}></a>`
      html += `</div>`;
    });

 // Add all the divs to the HTML
 document.querySelector('.containerProfiles').innerHTML = html;
})

let user1 = new User( "Antonio" , "ant" , "./assets/profile.png");
let user2 = new User("Arely" , "Are" , "Img");
let user3  = new User ("Erika" , "Anie" , "ImgUrl");

arrayUsers.push(user1);

arrayUsers.push(user2);

arrayUsers.push(user3);

console.log(arrayUsers);