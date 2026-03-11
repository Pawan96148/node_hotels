//.......................................DAY 01 ...............................................................



// var a=4;
// var b=5;
// var sum=a+b;
// const feel="good";
// console.log(sum);
// console.log(feel);

// ---------------------------------------------
/*
//ARRAY in JavaScript...................

const frnds=["Rahul","Niraj","Abhishek"];
console.log(frnds);

console.log(frnds[1]);
console.log(frnds);
frnds.pop("Abhishek");
frnds.push("Rohit");
console.log(frnds);*/


//----------------------------------------
//for loop in JavaScript..............
/*
var hour=10;
if(hour<12){
    console.log("we are not allowed");
    }else{
        console.log("we are allowed");
}
var count=10;
for(i=0;i<=10;i++){
    console.log(i);
    }
    */
   
   // var os=require('os');
   // var user=os.userInfo();
   // console.log(user);
   // console.log(user.username);

   
   //----------------------------------------
   // object in JavaScript..............
   // const person={
    //     name:"Pawan Kumar",
    //     age:20,
    //     isStudent: true,
    //     hobbies:["reading","writting","painting","singing"],
    // };
    // console.log(person);
    // console.log(person.hobbies);
    //function
    // const ages=[16,20,32,30,36];
    // const result=ages.filter(checkAge);
    // function checkAge(age){
        //     return age<=18
        // }
        // console.log(result);
        
        
        //----------------------------------------
//user input using prompt

// var prompt = require('prompt-sync')();
// const age=prompt("please enter your age:");
//     if (age<18){
//         console.log("you get a 20% discount!!!!");  
//     } else {
//         console.log("you get a 30% senior discount!!!!");
//     }

//.................................. DAY 2 ....................................................
/*-------------------------
 creating different type of functions in JS */
// function add(a, b){
//     return(a+b);
// }

// var add= function(a, b){
//     return(2,3);
// }

// var add=(a, b) =>{return(a+b);}


// var add=(a,b)=>(a+b);


// var result=add(2,3);
// console.log(result);

// (function(){
//     console.log('Pawan is Smart....')
// })();
/*********************************************/

/*function callback(){
    console.log('Adding is successfully completed!!!!...Pawan is calling a callback function');
}

const add=function(a, b, callback){
    var result=a+b;
    console.log('result:'+result);
    callback();
}

add(5,654,callback);
*/

/*
const add=function(a, b, Pawan){
    var result=a+b;
    console.log('result:'+result); // main function work complet
    Pawan();
}
// add(56,65,function(){
//     console.log('yeah!!! addition completed....')
// });
add(25,36,()=> console.log('addition completed...... hurray!'));


*/
/*------------------------------------------ core modules in nodeJS----------------------------------------

var fs=require('fs');//FS - file system
var os=require('os');//OS - operating system

var user=os.userInfo(); 
console.log(user.username);

fs.appendFile('greeting.txt','hello '+user.username+'!! good morning.....',()=>{
    console.log("hurray!!! My Greeting file is created...");
    })
    console.log(fs);
    
    */
   
   /*
   ------------------------------------------ lodash package in nodeJS----------------------------------------
   
   const notes=require('./notes.js');
   var _=require('lodash');
   
console.log('server file is available');

var age=notes.age;

var result=notes.addNumber(age,18);
console.log(age);
console.log('result: '+result);
var data =["person","person",1,3,2,3,"name","pawan","age",1];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString("Pawan"));
*/
//..................................................DAY 03.........................................................

 /*
  // ------------------------------------------ what is json? in nodeJS 😉----------------------------------------
   
  // -----------------------  conversion of json to object in nodeJS 😉-----------------------
   const jsonString = '{"Name":"Pawan","age":20,"City":"Jamshedpur"}';
   const jsonObject= JSON.parse(jsonString);
   console.log(jsonObject.Name);
   console.log(jsonObject.age);
   console.log(jsonObject);
   
   
 // -----------------------  conversion of object to json in nodeJS 😉-----------------------
  
const objectToConvert={
    name:"Pawan",
    age:20
};
const json=JSON.stringify(objectToConvert);//conver object to json string....😁
console.log(json);
console.log(typeof json);

*/
//...............................................DAY 04.............................................................

const express =require('express')

const app = express();
const db= require('./db');



const Laptop = require('./models/newLaptop');
const Plant = require('./models/plant');

//Middleware
const bodyParser=require('body-parser');
app.use(bodyParser.json()); // req.bodynet

//Routes
app.get('/', (req, res) => {
  res.send('hey broh😎.... how can i help you????')
});


//POST method to post a new laptop
app.post('/newLaptop',async (req,res)=>{
    try{
        const newLaptop=new Laptop(req.body);
        const response=await newLaptop.save();
        console.log('Laptop created successfully:', response);
        res.status(200).json(response);

    }catch(err){
        console.error("Error creating laptop:", err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});
//GET method to get all plants
app.get('/newLaptop',async(req,res)=>{
    try{
        const newLaptop=await Laptop.find();
        console.log('All plants:', newLaptop);
        res.status(200).json(newLaptop);

    }catch(err){
        console.error("Error fetching plants:", err);
        res.status(500).json({error: 'Internal Server Error'})

    }
});

//POST method to post a new plant
app.post('/plant',async (req,res) => {
    try{
        const plant=new Plant(req.body);// Assuming the request data contain the plant data...

    // create a new plant document using mongoose model..
        const response=await plant.save();// save the database
        console.log('Plant created successfully:', response);
        res.status(200).json(response);

    }catch(err){
        console.error("Error creating plant:", err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});
//GET method to get all plants
app.get('/plant',async (req,res) => {
    try{
        const plant=await Plant.find();
        console.log('All plants:', plant);
        res.status(200).json(plant);

    }catch(err){
        console.error("Error fetching plants:", err);
        res.status(500).json({error: 'Internal Server Error'})

    }
});






//import the router file

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the router
app.use('/person',personRoutes);
app.use('/menuItem',menuItemRoutes);


//comment adding for testing purpose
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})