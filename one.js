var b=20;
console.log(b);
b=30;
console.log(b);  //reassign

var c=40;
var c=100;
console.log(c);  //redeclare

console.log(d);
var d=10;
console.log(d);  //hoisting

{
    var e=11;
    // console.log(e);                    calling inside function 
}
console.log(e);                      //calling outside funstion here this method follows

//============================================  let  ==============================================

let f=20;
console.log(f);
f=30;
console.log(f);  //reassign

// let g=40;
// let g=100;
// console.log(g);  //redeclare       // it does not allows

// console.log(h);
// let h=10;
// console.log(h);  //hoisting        //temporal dead zone

{
    let i=11;
    console.log(i);                    
}
//console.log(i);                    //block scope is cant  be exicuted

//============================================= const ================================================
let j=20;
console.log(j);
j=30;
console.log(j);  //reassign

// let k=40;
// let k=100;
// console.log(k);  //redeclare       // it does not allows

// console.log(l);
// let l=10;
// console.log(l);  //hoisting        //temporal dead zone

{
    let m=11;
    console.log(m);                    
}
//console.log(m);                    //block scope is cant  be exicuted

//============================================= Data Types ================================================


let n=10;
console.log(n,typeof n);    //10 `number`

let o='hello';
console.log(o,typeof o);    //hello `string`

let p=true;
console.log(p,typeof p);    //true `boolean`

let q;
console.log(q,typeof q);    //undefined     `undefined`

let r=null;
console.log(r,typeof r);       //null   `object`

let s=1024636428364923620462n; //1024636428364923620462 `bigint`
console.log(s,typeof s);

//arrays.objects
let fruits=["apple","kiwi","mango","litchi","papaya"];
console.log(fruits);
console.log(fruits[10]);
// fruits[10]="cherry";
// console.log(fruits);
// console.log(fruits.at(10));

let student={
    username:"prem",
    place:"california",
    marks:100
}
console.log(student);
console.log(student.place);