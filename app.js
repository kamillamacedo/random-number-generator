let result = document.getElementById("result");

function generate() {
  let quantity = parseInt(document.getElementById("quantity").value) || 1;
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let allowDuplicates =
    document.getElementById("toggle-duplicates")?.checked || false;
  

  if (isNaN(min) || isNaN(max) || min > max) {
    return (result.innerHTML = `<span class="text__error">Error: Invalid input. The numbers could not be generated.</span>`);
  }

  if (quantity < 1) {
    quantity = 1;
  }

  let numbersList = numbersGenerator(quantity, min, max, allowDuplicates);
  
  if (numbersList.length === 0) {
    result.innerHTML = `<span class="text__error">Error: Not enough unique numbers available in the specified range.</span>`;
  } else{
    result.innerHTML = `<span class="text__success">Generated numbers: ${numbersList.join(", ")}</span>`;
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
  document.getElementById("quantity").value = "";
  document.getElementById("min").value = "";
  result.innerHTML = "";

  let maxInput = document.getElementById("max");
  maxInput.value = "";
  maxInput.removeAttribute("min");
}

function reset() {
  clearField();
  document.getElementById("btn-reset").setAttribute("disabled", true);
}
