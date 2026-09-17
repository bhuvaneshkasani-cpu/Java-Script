// let age = Number(prompt("Enter age"));

// if(age>=18){
//     console.log("Applicable to vote");
// }
// else if(age>=0 && age<=17){
//     console.log("Not Applicable to vote");    
// }
// else{
//     console.log("Enter proper number");   
// }

// if(age>=0 && age<5){
//     console.log("free ticket");
// }
// else if(age>=5 && age<10){
//     console.log("50rs");
// }
// if(age>=10 && age<20){
//     console.log("150rs");
// }
// if(age>=20){
//     console.log("250rs");
// }

//==================================Tickets==============================

let i = 1;
// while(i>10){
//     i++;
//     console.log(i);
// }   

do{
    i++;
    console.log(i);
}

while(i>10)
   let marks=[10,40,30,60,70,100];
for(const i in marks){
    if(marks[i]%3 == 0 && marks[i]%5 == 0){
        console.log("Students marks", marks[i]);
    }
}

let num1=10;
let num2=20;
console.log(num1>num2?"true case":"false case");

let movies = ["Pushpa", "RRR", "Lenin", "OG", "Legend"];
// console.log(movies);
// console.log(movies.pop());
// console.log(movies);
// console.log(movies.shift());
// console.log(movies);
// console.log(movies.push("GodFather"));
// console.log(movies);
// console.log(movies.unshift("Sakthi"));
// console.log(movies);
console.log(movies.splice(1,2,"kgf"));
console.log(movies);

let arr1=[10,20,30,40];
let arr2=[11,22,33,44];
console.log([...arr1,...arr2]);

let student1={
    name:"Luke",
    id:2   
}
let student2={
    name:"Anakin",
    id:1  
}
 console.log([{...student1},{...student2}]);