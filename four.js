// document.getElementById('one').innerHTML="Content from javascript";
// document.getElementById('one').style.color="red";
// document.getElementById("b").style.color="Yellow"
// document.querySelector('#four').addEventListener('change',()=>{
//     document.querySelector('#five').innerHTML=`${four.value}`
// })

document.querySelector('#myform').addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = document.querySelector('#username').value;
    let usernameRegex=/^[A-Za-z0-9]{3,}$/;
    if(!usernameRegex.test(username)){
        //alert("username is wrong");
        document.querySelector('#error').innerHTML=`<p style="color:red;">Invalid username</p>`
        return false;
    }
    alert("form submitted successfully");
    return true;
})