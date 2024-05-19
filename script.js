// function func(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxArea = 0;
//   while (left < right) {
//     let width = right - left;
//     let currentHeight = Math.min(height[left], height[right]);
//     let water = width * currentHeight;
//     maxArea = Math.max(maxArea, water);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
// }
// return maxArea;
// }

// const height = [1, 1];

// console.log(func(height));

// function func(s, t) {
//   let lengthT = t.length;
//   let left = 0;
//   let right = 0;
//   let minLength = Infinity;
//   let minWindow = 0;

//   const t_Set = new Map();

//   for (let char of t) {
//     t_Set.set(char, (t_Set.get(char) || 0) + 1);
//   }

//   const s_Set = new Map();

//   while (left < right) {
//     let rightChar = s[right];
//     s_Set.set(rightChar, (s_Set.get(rightChar) || 0) + 1);
//     if (s_Set.get(rightChar) <= t_Set.get(rightChar)) {
//       lengthT--;
//     }
//     while (lengthT === 0) {
//       let windowLength = right - left + 1;
//       if (windowLength < minWindow) {
//         minWindow = windowLength;
//         minWindow.slice(left, right + 1);
//       }
//       let leftChar = s[left];
//       s_Set.set(leftChar, s_Set.get(leftChar) - 1);
//       if (t_Set.get(leftChar) && s_Set.get(leftChar) < t_Set.get(leftChar)) {
//         lengthT++;
//       }
//       left++;
//     }
//     right++;
//   }
//   return minWindow === Infinity
//     ? ""
//     : s.slice(minWindow, minWindow + minLength);
// }

// const s = "a",
//   t = "a";

// console.log(func(s, t))

// function func(nums, k) {
//   const result = [];
//   const deque = [];
//   for (let i = 0; i < nums.length; i++) {
//     let dequeLastidxValue = deque[deque.length - 1];
//     while (deque.length > 0 && nums[dequeLastidxValue] <= nums[i]) {
//       deque.pop();
//     }
//     if (deque[0] <= i - k) deque.shift();
//     deque.push(i);
//     if (i >= k - 1) result.push(nums[deque[0]]);
//   }
//   return result;
// }

// const nums = [1, 3, -1, -3, 5, 3, 6, 7],
//   k = 3;

// console.log(func(nums, k));

// function func(s) {
//   const result = [];
//   console.log(result);
//   const map = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   for (let i = 0; i < s.length; i++) {
//     const str = s[i];
//     if (map.hasOwnProperty(str)) {
//       result.push(str);
//     } else {
//       let closingPart = result.pop();
//       if (!map.hasOwnProperty(closingPart)) {
//         return false;
//       }
//     }
//   }
//   return result.length === 0 || true;
// }

// const s = "()";

// console.log(func(s));

// function func() {
//     this.stack = [];
//     this.minStack = [];
//   }

//   MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//       this.minStack.push(val);
//     }
//   };

//   MinStack.prototype.pop = function() {
//     const val = this.stack.pop();
//     if (val === this.minStack[this.minStack.length - 1]) {
//       this.minStack.pop();
//     }
//   };

//   MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
//   };

//   MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1];
//   };

// function func(tokens) {
//   const stack = [];
//   const operators = ["+", "-", "*", "/"];

//   for (let token of tokens) {
//     if (!operators.includes(token)) {
//       stack.push(Number(token));
//     } else {
//       let oprnd2 = stack.pop();
//       let oprnd1 = stack.pop();
//       switch (token) {
//         case "+":
//           stack.push(oprnd1 + oprnd2);
//           break;
//         case "-":
//           stack.push(oprnd1 - oprnd2);
//           break;
//         case "*":
//           stack.push(oprnd1 * oprnd2);
//           break;
//         case "/":
//           stack.push(Math.trunc(oprnd1 / oprnd2));
//           break;
//         default:
//           break;
//       }
//     }
//   }
//   return stack.pop();
// }

// const tokens = ["2", "1", "+", "3", "*"];
// console.log(func(tokens));

// function func(n) {
//   const array = [];
//   const backTracking = (open, close, str) => {
//     if (str.length === n * 2) {
//       array.push(str);
//       return;
//     }
//     if (open < n) {
//       backTracking(open + 1, close, str + "(");
//     }
//     if (close < open) {
//       backTracking(open, close + 1, str + ")");
//     }
//   };
//   backTracking(0, 0, "");
//   return array;
// }
// const n = 3;
// console.log(func(n));
