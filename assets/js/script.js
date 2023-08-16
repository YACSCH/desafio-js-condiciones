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
function sumAmountStickers() {
  let htmlValue= document.getElementById("txtinputhtml").value
  let cssValue  = document.getElementById("txtinputcss").value
  let jsValue = document.getElementById("txtinputjs").value
  let messagge = document.getElementById("result-sticker")

  const sumNumber = Number(htmlValue) +  Number(cssValue) +  Number(jsValue)

  if (sumNumber <= 10 ){ 
      messagge.innerHTML = `Llevas ${sumNumber} stickers`
  }
  else{
    messagge.innerHTML = "Llevas demasiados stickers"
  }




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