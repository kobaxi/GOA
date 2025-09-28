function modifyArray(inputArray) {
    
  let concatArray = inputArray.slice();

  concatArray.copyWithin(concatArray.length - 2, 0, 2);

  concatArray.fill(0, concatArray.length - 3);

  let lastElement = concatArray.pop();

  let firstElement = concatArray.shift();

  concatArray.unshift(10, 20);

  console.log("შეცვლილი მასივი:", concatArray);

  console.log("ამოღებული პირველი ელემენტი:", firstElement);

  console.log("ამოღებული ბოლო ელემენტი:", lastElement);

}

