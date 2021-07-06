

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', "'", '"', '<', '>', ',', '/', '?', '~', "`"];


function calculateTip(){
  var cost = document.getElementById('mealCost').value;
  var percent = document.getElementById('tipPercentage').value;
  var costArr = cost.split('');
  var percentArr = percent.split('');
  var validator = 0;
  for (let i = 0; i < costArr.length; i++){
    for (let x = 0; x < alphabet.length; x++){
      if (costArr[i] == alphabet[x]){
        validator += 1;
      }
    }
  }
  for (let a = 0; a < percentArr.length; a++){
    for (let b = 0; b < alphabet.length; b++){
      if (percentArr[a] == alphabet[b]){
        validator += 1;
      }
    }
  }
  for (let c = 0; c < costArr.length; c++){
    for (let d = 0; d < characters.length; d++){
      if (costArr[c] == characters[d]){
        validator += 1;
      }
    }
  }
  for (let e = 0; e < percentArr.length; e++){
    for (let f = 0; f < characters.length; f++){
      if (percentArr[e] == characters[f]){
        validator += 1;
      }
    }
  }
  if (costArr == '' || percentArr == ''){
    return alert("Please fill in ALL form input fields.");
  } else if (validator != 0){
    return alert("Please only enter NUMBERS in the form input fields.");
  } else {
    var tip = ((percent * .01)*cost).toFixed(2);
    return alert("The tip amount due is " + tip + ".")
  }
}



function refreshPage(){
  location.reload();
}
