const CheckIfAnArrayIsSorted = () => {
  let arr = [20, 20, 78, 98, 99, 97];
  let isSorted = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    } else {
      isSorted = true;
    }
  }

  return isSorted;
};

console.log(CheckIfAnArrayIsSorted());
