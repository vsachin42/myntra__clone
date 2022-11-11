let otp = document.querySelector("#otp").value;
otp = +(otp);
console.log(typeof(otp));

document.querySelector("button").addEventListener("click",()=>{
    console.log(otp);
    if(otp==1234){
        alert("Login Succesful")
    } else {
        alert("Invalid OTP")
    }
})