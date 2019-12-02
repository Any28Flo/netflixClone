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
        this.preferences  = ["action", "horror", "suspense"];
    }
    printName(){

        console.log(`Hello ${this.name}` );
    }
}
//functions



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
//document.querySelector('.containerProfiles').innerHTML = html;
})

let user1 = new User( "Antonio" , "ant" , "./assets/profile.png");
let user2 = new User("Arely" , "Are" , "Img");
let user3  = new User ("Erika" , "Anie" , "ImgUrl");

arrayUsers.push(user1);

arrayUsers.push(user2);

arrayUsers.push(user3);

function createUser(){

    let name= $("#nameUser");
    let userName = name[0].value;
    let nick = $("#nickName")
    let nickName = nick[0].value;

   let newUser = new User(userName, nickName);
   arrayUsers.push(newUser);
   alert('You are creating a new user successfully')
   listUsers();
   clearInput();
   
}

function listUsers(){
    let users = document.getElementById("users");
    let newUser;
    arrayUsers.forEach(user =>{
     newUser = document.createElement('div');
    newUser.classList.add('row');
    newUser.classList.add('newUSer');
    newUser.innerHTML = `
        <div class= "col-md-6">
        <div class="userName">Name: ${user.name}</div>
        <div class="nickName"> NickName: ${user.nickName}</div>
        <div>
            <button type='button' class='btn btn-danger btn-delete'>Delete</button>
        </div>
        </div>
    `;
    users.appendChild(newUser);
    })
}
function clearInput(){
    let inputCollection = document.getElementsByClassName('inputData');
  
    for (i = 0; i < inputCollection.length; i++){
      let input = inputCollection[i];
      input.value = '';
    };
  };
  
function deleteItem(e){
    let buttonClicked = e.currentTarget;
    let userContainer = document.getElementById('users');
    
    let user = buttonClicked.parentElement.parentElement.parentElement;
    userContainer.removeChild(user);
  };
$( "#createUser" ).click(function() {
    createUser();
});

$( "#updateUser" ).click(function() {
   
});

listUsers();

var deleteButtons = document.getElementsByClassName('btn-delete');

for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;

  };