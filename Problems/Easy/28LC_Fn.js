<<<<<<< HEAD
var strStr = function (haystack, needle) {
  let nLen = needle.length;
  let hayLen = haystack.length;
  let indexAt = -1;

  if (hayLen < nLen) return -1;

  for (let i = 0; i < hayLen; i++) {
    for (let j = 0; j < nLen; j++) {
      if (haystack[i] === needle[j]) {
        if (indexAt === -1) indexAt = i;
        break;
      } else {
        i++;
        break;
      }
    }
  }
  return indexAt;
};
=======
var strStr = function(haystack, needle) {
    if(haystack && needle){
      for(let charInhaystack in haystack){
        console.log(charInhaystack);
      }
    }else{
      return -1;
    }
};
>>>>>>> 578cd77d75212ba1dc7f50eb8d75c71a6cf0729f
