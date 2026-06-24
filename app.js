let result = document.getElementById("result");

function generate() {
  let quantity = parseInt(document.getElementById("quantity").value) || 1;
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let allowDuplicates =
    document.getElementById("toggle-duplicates")?.checked || false;
  

  if (isNaN(min) || isNaN(max) || min > max) {
    return (result.innerHTML = `<label class="text__paragraph">Error: Invalid input. The numbers could not be generated.</label>`);
  }

  if (quantity < 1) {
    quantity = 1;
  }

  let numbersList = numbersGenerator(quantity, min, max, allowDuplicates);
  
  if (numbersList.length === 0) {
    result.innerHTML = `<label class="text__paragraph">Error: Not enough unique numbers available in the specified range.</label>`;
  } else{
    result.innerHTML = `<label class="text__paragraph">Generated numbers: ${numbersList.join(", ")}</label>`;
  }


  document.getElementById("btn-reset").removeAttribute("disabled");

  console.log(numbersList);

  return numbersList;
}

function numbersGenerator(quantity, min, max, allowDuplicates) {
  let numbersGenerated = [];

  if (!allowDuplicates && max - min + 1 < quantity) {
    return [];
  }

  while (numbersGenerated.length < quantity) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (allowDuplicates || !numbersGenerated.includes(number)) {
      numbersGenerated.push(number);
    }
  }

  return numbersGenerated;
}

function updateLimits() {
  let minValue = parseInt(document.getElementById("min").value);
  let inputMax = document.getElementById("max");

  if (!isNaN(minValue)) {
    inputMax.min = minValue + 1;
  }
}

function clearField() {
  let quantity = document.getElementById("quantity");
  let min = document.getElementById("min");
  let max = document.getElementById("max");

  quantity.value = "";
  min.value = "";
  max.value = "";
  result.innerHTML = "";

  max.removeAttribute("min");
}

function reset() {
  clearField();
  document.getElementById("btn-reset").setAttribute("disabled", true);
}
