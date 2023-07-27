// Write a JavaScript program to find the most frequent element in an array and return it.

const frequentEle = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const matchElement = array.filter((element) => element === array[i]);
    const objArray = {
      mainNumber: array[i],
      arrayLength: matchElement.length,
    };

    newArray.push(objArray);
  }

  const highestNumber = newArray.map((element) => element.arrayLength);

  const maxUsedValue = Math.max(...highestNumber);

  const filterArray = newArray.find(
    (element) => element.arrayLength === maxUsedValue
  );

  return filterArray.mainNumber;
};

const inputArray = [3, 5, 13, 13, 3, 3, 23, 23, 23, 23, 23];
const result = frequentEle(inputArray);
console.log(result);
