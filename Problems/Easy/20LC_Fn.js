var isValid = function (s) {
  const parenthesesMap = ["(", ")", "{", "}", "[", "]"];

  let start = 0;
  let end = s.length;

  while (start < end) {
    for (let i = 0; i < parenthesesMap; i++) {
       if(s[start] === parenthesesMap[i] && s[start + 1] === parenthesesMap[i+1]){
        break;
       }
    }
    start++;
    end--;
  }
};

isValid("(]");
