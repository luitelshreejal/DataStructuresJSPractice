// Push duplicate items into a separate array in Javascript with for loop?

// For some reason, the manipulated doubleArray below is not shown in the console. Any variables that I declare after the for loop won't show to the console on both cases. Consider that in the first algorithm, there is only one for loop with x being incremented everytime. Whereas, in the second algorithm, it's a nested for loop. Can someone help me fix my error in both algorithms? First Algorithm:


// my Code:
// var isDuplicate = function() {
//     var helloWorld = [1,2,3,4,3];
//     var doubleValue = [];
//     var x = 0;
//     for (i = 0; i < helloWorld.length; i++) {
//       x = x + 1;
//       if (helloWorld[i] === helloWorld[x] && i !== x) {
//         doubleValue.push(helloWorld[i])
//         console.log(helloWorld[i]);
//       } else {
//         continue;
//       }
//     }
//     console.log(doubleValue);
//   };

// The second Algorithm:

// var isDuplicate = function() {
//   var helloWorld = [1,2,3,4,3];
//   var doubleValue = [];
//   for (i = 0; i < helloWorld.length; i++) {
//     for (x = 1; x < helloWorld.length; i++) {
//       if (helloWorld[i] === helloWorld[x] && i !== x) {
//         doubleValue.push(helloWorld[x]);
//       }
//     }
//   }
//   console.log(doubleValue);
// };


var isDuplicate = function() {
    var helloWorld = [1,2,3,4,3,6];
    var doubleValue = [];
    helloWorld = helloWorld.sort((a, b) => { return a - b });
    for (i = 0; i < helloWorld.length; i++) {
      if (helloWorld[i] === helloWorld[++i]) {
        doubleValue.push(helloWorld[i])
        console.log(helloWorld[i]);
      } else {
        continue;
      }
    }
    console.log(doubleValue);
  };
  
  isDuplicate();

  var isDuplicate = function(array) {
    var doubleValue = [];
    outer: for (var i = 0; i < array.length - 1; i++) { // add label,
                                                        // declare variable i
                                                        // no need to check last element
        for (var j = i + 1; j < array.length; j++) {    // start from i + 1,
                                                        // increment j
            if (array[i] === array[j]) {                // compare values, not indices
                doubleValue.push(array[i]);
                continue outer;                         // prevent looping
            }
        }
    }
    return doubleValue;
};

console.log(isDuplicate([1, 2, 3, 4, 3])); // [3]