const RGBHexContainerHTML = document.querySelector("#RGB-Hex-container");
const InputRangeRedHTML = document.querySelector("#input-range-R");
const InputRangeGreenHTML = document.querySelector("#input-range-G");
const InputRangeBlueHTML = document.querySelector("#input-range-B");
const hexContainerHTML = document.querySelector("#Hex-container");

RGBHexContainerHTML.addEventListener("input", e => {
  displayBackgroundColor();
  displayRGBNumber();
  displayHexNumber();
})

function displayBackgroundColor() {
  const rgbContent = `rgb(${InputRangeRedHTML.value}, ${InputRangeGreenHTML.value}, ${InputRangeBlueHTML.value})`;
  RGBHexContainerHTML.style.backgroundColor = rgbContent;
}

function displayRGBNumber() {
  const colorNumberRedHTML = document.querySelector("#color-number-R");
  const colorNumberGreenHTML = document.querySelector("#color-number-G");
  const colorNumberBlueHTML = document.querySelector("#color-number-B");
  colorNumberRedHTML.innerHTML = InputRangeRedHTML.value;
  colorNumberGreenHTML.innerHTML = InputRangeGreenHTML.value;
  colorNumberBlueHTML.innerHTML = InputRangeBlueHTML.value;
}

function displayHexNumber() {
  let htmlContentArray = ["#"];
  htmlContentArray.push(...decimalToHex(InputRangeRedHTML.value));
  htmlContentArray.push(...decimalToHex(InputRangeGreenHTML.value));
  htmlContentArray.push(...decimalToHex(InputRangeBlueHTML.value));
  hexContainerHTML.innerHTML = htmlContentArray.join("");
}

function decimalToHex(decimal) {
  let number = decimal;
  const hexArray = [];
  while (Math.floor(number / 16) !== 0) {
    hexArray.push(number % 16);
    number = Math.floor(number / 16);
  }
  hexArray.push(number % 16);

  hexArray.forEach((hex, index) => {
    let hexNumber = "";
    switch (hex) {
      case 10:
        hexNumber = "A";
        break;
      case 11:
        hexNumber = "B";
        break;
      case 12:
        hexNumber = "C";
        break;
      case 13:
        hexNumber = "D";
        break;
      case 14:
        hexNumber = "E";
        break;
      case 15:
        hexNumber = "F";
        break;
      default:
        hexNumber = hex;
    }
    hexArray[index] = hexNumber;
  });

  if (hexArray.length === 1) {
    hexArray.push(0);
  }

  return hexArray.reverse();
}