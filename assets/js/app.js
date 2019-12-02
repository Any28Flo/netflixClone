class User{
    constructor(name, nickName, profilePicture){
        this.name = name ;
        this.nickName = nickname;
        this.profilePicture = profilePicture;
    }
    printName(){
        console.log(`Hello ${this.name}` );
    }
}

let user1 = new User( "Antonio" , "ant" , "img");
let user2 = new User("Arely" , "Are" , "Img");
let user3  = new User ("Erika" , "Anie" , "ImgUrl");