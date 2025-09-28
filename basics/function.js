function sayMyName(){
       console.log("Ajay");
}

sayMyName();


// function isLoggedIn(username){
//          return `${username} is logged in`;
// }

function isLoggedIn(username){
    return username +" is logged in";
}

console.log(isLoggedIn("Ajay"));


/// Rest operator

// function calculator(...num){
//        return num;
// }

// console.log(calculator(100,200,300,400));

function calculator(val1,val2,...num){
    return num;
}

console.log(calculator(100,200,300,400));



function handleAnyObject(anyObject){
         console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}


const user = {
          username : "Tanya",
          price : 10000
}

handleAnyObject(user);


const array = [100,200,300,400];
