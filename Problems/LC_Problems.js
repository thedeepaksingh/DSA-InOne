(function () {
  let __run_problem = "LC27_Fn";

  (function LC27_Fn() {
    var removeElement = function (nums, val) {
      let myarr = [];
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
          myarr.push(nums[i]);
        }
      }
      // Copy elements back to nums
      for (let i = 0; i < myarr.length; i++) {
        nums[i] = myarr[i];
      }
      nums.length = myarr.length; // truncate
      return nums.length;
    };

    if (__run_problem === "LC27_Fn") removeElement([3, 2, 2, 3], 3);
  })();

  (function LC26_Fn() {
    var removeDuplicates = function (nums = []) {
      if (nums.length === 0) return 0;

      let mySet = new Set();
      for (let i = 0; i < nums.length; i++) {
        if (!mySet.has(nums[i])) {
          mySet.add(nums[i]);
        }
      }
      nums.length = 0;
      for (let item of mySet) {
        console.log("Set: ", item);
        nums.push(item);
      }
      let len = nums.length;
      return len;
    };

    if (__run_problem === "LC26_Fn") removeDuplicates([1, 1, 2]);
  })();

  (function LC14_Fn() {
    const longestCommonPrefix = (strArr) => {
      if (strArr.length === 0) return "";

      let output = "";

      for (let i = 0; i < strArr[0].length; i++) {
        let currentChar = strArr[0][i];

        for (let j = 1; j < strArr.length; j++) {
          if (strArr[j][i] !== currentChar) {
            return output;
          }
        }
        output += currentChar;
      }
      return output;
    };

    if (__run_problem === "LC14_Fn")
      longestCommonPrefix(["flower", "flow", "flight"]);
  })();
  (function LC9_Fn() {
    var isPalindrome = (num_check) => {
      if (num_check < 0) return false;

      let arr = [];

      while (num_check > 0) {
        let digit = num_check % 10;
        arr.push(digit);
        num_check = Math.floor(num_check / 10);
      }

      // Now check if the array is a palindrome
      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
      }

      return true;
    };

    if (__run_problem === "LC9_Fn") isPalindrome(121);
  })();
})();
