



function calculateTip(){
  var cost = document.getElementById('mealCost').value;
  parseFloat(cost);
  var percent = document.getElementById('tipPercentage').value;
  parseFloat(percent);
  var tip = ((percent * .01)*cost).toFixed(2);
  return alert("The tip amount due is $"+tip+".");
}

function refreshPage(){
  location.reload();
}
