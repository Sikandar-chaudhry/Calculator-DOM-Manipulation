const wrapper1 = document.querySelector('.loader-wrapper-one');
const wrapper2 = document.querySelector('.loader-wrapper-two');
const container = document.querySelector('.container');
const splash = document.querySelector('.splash');
let duration = 1800;

//Calculator Varibales
const input = document.getElementById('input-field');

//Populate input field
function writeInInputField(value){
    input.value += value;
}
//Clear Input field
function clearInputField(){
    input.value = "";
}
//Calculate function
function calculate(){
    try{    
        input.value = eval(input.value);
    } catch (error){
        input.value = "Error";
    }
}

//Splash Screen JS
setTimeout(() =>{
    wrapper1.style.transform = 'translateX(0)';
    setTimeout(()=>{
        wrapper2.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            splash.style.transform = 'translateY(-100vh)';
            container.style.transform = 'translateY(-100vh)';
        }, 2000);

    }, duration-1000);
}, duration);