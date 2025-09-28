// singleton --constructor approach

const ob = new Object();

const ob1 = Object.create({
      name:"Ajay",
      age:26

});


const symb = Symbol("full name");

//literal non singleton
const obj = {
        name:"Ajay",
        "full name":"Ajay Pundir",
        [symb]:"Ajay Pundir",
        age:26,
        location:"Noida",
        isLoggedIn:true
}

console.log(obj["full name"]);

console.log(ob.age);

console.log(obj[symb]);


obj.age = 27;
console.log(obj);

//Object.freeze(obj);
obj.age = 26;
console.log(obj);

obj.greeting = function(){
      console.log("hello objects");
}

obj.greeting1 = function(){
    console.log(`hello , ${this["full name"]}`);
}

// console.log(obj.greeting);
console.log(obj.greeting());

console.log(obj.greeting1());


const object1 = {
        1:'a',
        2:'b'
}

const object2 = {
    3:'c',
    4:'d'
}

//const object =  Object.assign({},object1,object2);


// console.log(object);


//spread operator
 

const object = {...object1,...object2};

console.log(object);


///key value  entries method 

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
console.log(object.hasOwnProperty(1));




//Destructure object



const course = {
        course:"javascript",
        courseInstructor:"Ajay"
}

const {courseInstructor} =course;

const {courseInstructor:instructor} =course;

console.log(courseInstructor);
console.log(instructor);

