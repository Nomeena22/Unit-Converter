 function convertToBinary() {
    


 const decimal = document.getElementById("decimalInput").value;
const result = decimalToBinary(decimal);
document.getElementById("convert").value = result


}
function decimalToBinary(number){
    if(number === "0"){
    return 0
    }
let binary= "";
number = parseInt(number);

while(number > 0){
    binary = (number % 2) + binary;
    number = Math.floor(number/2)
    
}
return binary;
}
/*
function convertToBinary() {
    const decimalNumber = document.getElementById("decimalInput").value;
    const binaryNumber = decimalToBinary(decimalNumber);
    document.getElementById("binaryOutput").value = binaryNumber;
  }

  function decimalToBinary(number) {
    if (number === "0") {
      return "0"; // Edge case: handle zero separately
    }

    let binary = "";
    number = parseInt(number); // Convert the input to an integer

    while (number > 0) {
      binary = (number % 2) + binary; // Prepend the remainder to the binary string
      number = Math.floor(number / 2); // Update the number by dividing it by 2
    }

    return binary;
  }*/