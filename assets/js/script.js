const clickableImage = document.getElementById("clickable-image");
let BorderVisible = false;


function ShowBorder() {
  if (BorderVisible) {
    clickableImage.style.border = "none";
    console.log("sin borde");
  } else {
    clickableImage.style.border = "2px solid red";
    console.log("con borde");
  }
  BorderVisible = !BorderVisible;
}

function verifyPass(){
  let cbofirst = document.getElementById("cboNumberFirst").value
  let cboSecond = document.getElementById("cboNumberSecond").value
  let cboThird = document.getElementById("cboNumberThird").value
  let messagge = document.getElementById("password-message") 

  const concatNumber = cbofirst + cboSecond + cboThird

  if (concatNumber == 911 ){ 
      messagge.innerHTML = "Password Correcto 1"
  }
  else if(concatNumber == 714 ){ 
    messagge.innerHTML = "Password Correcto 2"
  } 
  else{
    messagge.innerHTML = "Password incorrecto "
  }

}