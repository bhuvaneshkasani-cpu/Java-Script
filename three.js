function add(a,b){
    return a+b;
}
console.log(add(3,4));
console.log(add(10,4));


function multiplyValues(c,d){
    console.log(c*d);
}
multiplyValues(11,12)

//arrow functions
const subract = (e,f)=>{
    console.log(e-f)
}
subract(100,90)

//closures
function outside(b){
    console.log("Outside function");
    let a = 11;
    return function inside(){
        console.log(a,"variable")
        console.log(b,"parameter");
    }
}
let hello = outside("code");
hello()
console.dir(hello)  

//default parameters
function info(a,b=2,c=5){ //assigning default values
    console.log(a+b+c);
}
info(10,20)
info(11)

//rest parameter
function content(a,...b){
    console.log(a);
    console.log(b);
}
content(1,2,3,4,5,6,7)

document.getElementById('one').addEventListener('click',function(){
    alert("ready with ure ppts")
})

document.getElementById('two').addEventListener('mouseout',()=>{
    alert("out of paragraph")
})