function generate() {
  let quantity = parseInt(document.getElementById("quantity").value) || 1;
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min > max) {
    return [];
  }

  if (quantity < 1) {
    quantity = 1;
  }

  let numbersList = numbersGenerator(quantity, min, max);
  console.log(numbersList);
  return numbersList;
}

function numbersGenerator(quantity, min, max) {
  let numbersGenerated = [];
  for (let index = 0; index < quantity; index++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    numbersGenerated.push(number);
  }

  return numbersGenerated;
}

function updateLimits() {
  let minValor = parseInt(document.getElementById("min").value);
  let inputMax = document.getElementById("max");

  if (!isNaN(minValor)) {
    inputMax.min = minValor + 1;
  }
}

function reset(params) {}
