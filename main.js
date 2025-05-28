let menu = document.querySelector('#menu-button');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

// REGISTER PAGE
console.log(document.querySelector('register-btn'))
document.getElementById('register-btn').onclick = () =>{
    document.querySelector('.register-form-container').classList.toggle('active');
}

document.querySelector('#close-register-form').onclick = () =>{
    document.querySelector('.register-form-container').classList.remove('active');
}

// REGISTER PAGE 2

function validate(){
    let input_name = document.getElementById("name")
    let input_email = document.getElementById("email")
    let input_password = document.getElementById("password")
    let input_cpassword = document.getElementById("cpassword")
    let input_male = document.getElementById("male")
    let input_female = document.getElementById("female")
    let input_agree = document.getElementById("agree")

    // if(condition){
    //     body
    // }

    if(input_name.value == "" || input_password.value == "" || input_email.value == ""){
        alert("All fields must be filled")
        return false
    }else if(input_name.value.length <= 5){
        alert("Name must be more than 5 letters")
        return false
    }else if(input_email.value.endsWith("@gmail.com") == false){
        alert("Email must ends with @gmail.com")
    }else if(!isAlphaNum(input_password.value)){
        alert("password must be alpha numeric")
        return false
    }else if(input_password.value != input_cpassword.value){
        alert("Re-type correct password")
        return false
    }else if(!input_male.checked && !input_female.checked){
        alert("Choose a gender")
        return false
    }else if (!input_agree.checked){
        alert("Conditions are not agreed")
        return false
    }
    // console.log("Inputan nama: ", input_name.value)
    return false
}

function isAlphaNum(element){
    for(let i=o; i<element.length; i++){
        if(element[i] >= 'a' && element[i] <= 'z'){
            continue
        }else if(element[i] >= 'A' && element[i] <= ''){
            continue
        }else if(element[i] >= '0' && element[i] <= '9'){
            continue
        }else{
            return false
        }
    }
}

// SLIDER-CARS-HOME
var swiper = new Swiper(".cars-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });




   

