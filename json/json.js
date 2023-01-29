"use strict";
import users from './loops.json' assert{type : 'json'};


////////////////////////For the Given JSON iterate over all For Loops/////////////////////////////
console.log("******For the Given JSON iterate over all For Loops*******");
let jsonObj = users;
console.log(jsonObj)
let objKeys = Object.keys(jsonObj);
let objValues = Object.values(jsonObj)

////////////////////////For Loops/////////////////////////////
console.log("******For Loop*******");

for (let i =0; i<objKeys.length; i++){
    console.log("Dog name is " + objKeys[i] + " and Price is " + objValues[i].price);
}


////////////////////////For In/////////////////////////////
console.log("******For In*******");

let forInLoopEx = {
    fName : "Vignesh",
    lName : "Manoharan",
    age : 25,
    isMarried : false
}
for(let i in forInLoopEx){
    console.log(i + ": " + forInLoopEx[i])
}

////////////////////////For Each/////////////////////////////
console.log("******For Each*******");


objKeys.forEach((element, index)=> {
    console.log(element, index)
})

////////////////////////For Of/////////////////////////////
console.log("******For Of*******");

    for(let obj of objKeys){
       console.log(obj);
    }


////////    how to compare two Js objects have the same properties without order? /////////////
    // print "yes" if both object are same or else print "no"
    // a. let obj1 = {name: "James", age : 5}
    // b. let obj2 = {age : 5, name : "James"}
console.log("*** how to compare two Js objects have the same properties without order?***")

let obj1 = {name : "James", age : 5};
let obj2 = {age : 5, name : "James"};

function compare2Objects (ob1, ob2){
    let obj1properties = Object.getOwnPropertyNames(ob1).sort();
    let obj2properties = Object.getOwnPropertyNames(ob2).sort();

    if (obj1properties.length !== obj2properties.length){
        return "Both Objects are not Same";
    }
    for (let i = 0; i<obj1properties.length; i++){
        if (obj1properties[i]!==obj2properties[i]){
            return "Both Objects are not Same";
            
        }
        if (ob1[obj1properties[i]] !== ob2[obj2properties[i]]){
            return "Both Objects are not Same";
        } 
    }
    return "Both Objects have the Same Properties"
        
}
console.log(compare2Objects(obj1, obj2));

