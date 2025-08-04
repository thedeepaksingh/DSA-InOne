const isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0) return false;

  let arr = [];
  while (x) {
    let char = Math.floor(x % 10);
    arr.push(char);
    x = Math.floor(x / 10);
  }

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

isPalindrome(121);
