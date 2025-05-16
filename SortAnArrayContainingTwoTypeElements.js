const SortAnArrayContainingTwoTypeElements = () => {
  let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== 0 && arr[j] === 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        break;
      }
    }
  }

  return arr;
};

console.log(SortAnArrayContainingTwoTypeElements());
