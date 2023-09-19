let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 7];

let numeroMayor = myArray[0]; 

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > numeroMayor) {
    numeroMayor = myArray[i]; 
  }
}

console.log(numeroMayor); 