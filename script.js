"use strict";

// identify pointer with lesser  value
// is the pointer value less or equal with the value at that side
//     YES  => update pointer as that side
//      NO => get water for pointer value add to total

const getTrappedWater = (height) => {
  let left = 0; // iterate from leftside of the array || Left pointer
  let right = height.length - 1; // iterate from rightside of the array || right pointer
  let maxLeft = 0; // maximum value from left
  let maxRight = 0; // minimum value from right
  let total_max = 0; // total value between left and right pointer

  // iterate || scan through the array from left to right || using two pointer technis
  while (left < right) {
    console.log({ right, left });
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        total_max = maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        total_max = maxRight - height[right];
      }
      right--;
    }
  }
  console.log({ Total: total_max });
  return total_max;
};

// getTrappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
