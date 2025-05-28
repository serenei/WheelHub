function validate(){
    let input_name = document.getElementById("name")
    let input_email = document.getElementById("email")
    let input_password = document.getElementById("password")
    let input_cpassword = document.getElementById("cpassword")
    let input_male = document.getElementById("male")
    let input_female = document.getElementById("female")
    let input_agree = document.getElementById("agree")

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