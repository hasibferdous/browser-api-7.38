console.log('prompt connected');
//alert("How are you!");

const showAlert = () => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
    alert("How are you!");
}
}
const askSomething = () =>{
    const decision = confirm('Are you coming');
    console.log(decision);
    if(decision === true){
        alert('Ok! Come fast');
    }
    else {
        alert('Ok, GoodBye!');
    }
}

const getUserInfo = () =>{
    const name = prompt('Tell us your name.')
    console.log(name);
    alert(name);
}