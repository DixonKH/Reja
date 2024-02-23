
//  ===========================  Task-G

function getHighestIndex(arr) {
   if(Array.isArray(arr)) {
      let largest = arr[0];
      for(let i = 0; i < arr.length; i++) {
         if(arr[i] > largest) {
            largest = arr[i];
           }
         largeIndex = arr.indexOf(largest); 
         }
      }
      return largeIndex;
         
      }

const result = getHighestIndex([4, 47, 26, 7, 24, 47]);

console.log("largeIndex: ", result);


