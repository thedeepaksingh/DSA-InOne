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
