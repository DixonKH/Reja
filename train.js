
//  ===========================  Task -F

function findDouble(str) {
  const txt = str.toLowerCase(); 
 for (let i = 0; i < txt.length-1; i++) {
    if(txt[i] === txt[i+1]) {
       console.log(txt[i+1]);
       return true;
    }
 }
 return false;
}

let result = findDouble("Hello");
console.log("result: ", result);


