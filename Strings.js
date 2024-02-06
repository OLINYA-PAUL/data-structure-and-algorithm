"use strict";

// alert('hello data structure and algorithm')

// const builtArrayString = (stringValue) => {
//   const array = [];

//   for (let i = 0; i < stringValue.length; i++) {
//     if (stringValue[i] !== "#") {
//       array.push(stringValue[i]);
//     } else {
//       array.pop(i);
//     }
//   }
// };

// const compacBackArrayValue = (S, T) => {
//   const valueAtS = builtArrayString(S);
//   const valueAtT = builtArrayString(T);

//   if (valueAtS !== valueAtT) return false;
//   else {
//     for (let i = 0; i < valueAtS.length; i++) {
//       if (valueAtS[i] !== valueAtT[i]) return false;
//     }
//   }

//   return true;
// };

// // console.log(compacBackArrayValue([], []));

// const arrayOptimized = (arrayAtRight, arrayAtLeft) => {

//   let rightIndex = arrayAtLeft.length - 1;
//   let leftIndex = arrayAtRight.length - 1;

//   if (arrayAtRight.length > 0 && arrayAtLeft.length > 0) {

//     for (let i = 0; i >= arrayAtRight.length; i--) {
//       if (rightIndex !== "#") {
//         rightIndex = rightIndex[i];
//       } else rightIndex = rightIndex[i]--;


//     }
//     for (let i = 0; i >= arrayAtLeft.length; i--) {
//       if (leftIndex !== "#") {
//         leftIndex = leftIndex[i];
//       } else leftIndex = leftIndex[i]--;


//     }
//   }
// };

// const buildArrayCompare = (S, T) => {

//   const rightArrayValue = arrayOptimized(S);
//   const LeftArrayValue = arrayOptimized(T);
//   console.log(rightArrayValue);
//   if (rightArrayValue !== LeftArrayValue) return false;
//   else {
//     for (let p = 0; p >= rightArrayValue; p--) {
//       if (rightArrayValue[p] === LeftArrayValue[p] || rightArrayValue[p] !== LeftArrayValue[p]) {
//         console.log({ valeAtP: rightArrayValue[p] })
//         return false;
//       }
//     }
//   }
//   return true;
// };
// // console.log(buildArrayCompare("abc#d", "abz##d"));

const compareArrayCharacters = (p1, p2) => {

  let p1value = p1.length - 1;
  let p2value = p2.length - 1;

  // if (p1 || p2) {
  while (p1value >= 0 || p1value >= 0) {

    if (p1[p1value] === '#' || p2[p2value] === '#') {
      if (p1[p1value] === '#') {
        let backCountIndex = 2;
        while (backCountIndex > 0) {
          p1value--;
          backCountIndex--;
          if (p1[p1value] === '#') {
            backCountIndex = backCountIndex + 2
          }
        }
      }

      // AT P2
      if (p2[p1value] === '#') {
        let backCountIndex = 2;
        while (backCountIndex > 0) {
          p1value--;
          backCountIndex--;
          if (p2[p1value] === '#') {
            backCountIndex = backCountIndex + 2
          }
        }
      }
    } else {
      if (p1[p1value] !== p2[p2value]) {
        return false
      } else {
        p1--;
        p2--;
      }
    }
  }
  // }

  return true

}
// console.log(compareArrayCharacters("abc#d", "abz##d"))

const compareBackSpaceCharacter = (S, T) => {
  let p1 = S.length - 1;
  let p2 = T.length - 1;

  if (S && T) {
    while (p1 >= 0 || p2 >= 0) {
      if (S[p1] === '#' || T[p2] === '#') {
        if (S[p1] === '#') {
          let backCountIndex = 2;
          while (backCountIndex > 0) {
            p1--
            backCountIndex--
          }
        } else {
          if (S[p1] === '#') {
            backCountIndex = backCountIndex + 2
          };
        }
        if (T[p2] === '#') {
          let backCountIndex = 2;
          while (backCountIndex > 0) {
            p2--
            backCountIndex--
          }
        } else {
          if (T[p2] === '#') {
            backCountIndex = backCountIndex + 2
          };
        }
      } else {
        if (S[p1] !== T[p2]) {
          return false
        } else {
          p1--
          p2--
        }
      }
    }
  }
  return `the value is ${true}`
}

console.log(compareBackSpaceCharacter("abc#d", "abz#d"))