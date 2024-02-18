//  ================================  Task-I 

function getReverse(txt) {
      let arr = [];
      for(let i = 0; i < txt.length; i ++) {
        arr.push(txt[i]);
      }
      const new_arr = arr.reverse();
      const new_str = new_arr.join("");

      return  console.log(new_str);
}

getReverse("Hello");


//  ===================================  Task - D
  // function checkContent(a, b) {
  //       let arr = [];
  //       let arr2 = [];
  //       if(typeof a == "string" && typeof b == "string") {
  //             for(let i = 0; i < a.length; i++) {
  //               arr.push(a[i]);
  //             };
  //             for(let k = 0; k < b.length; k++) {
  //               arr2.push(b[k]);
  //             }; 
  //             const new_arr = arr.sort();
  //             const new_arr2 = arr2.sort();
  //             const str1 = new_arr.toString();
  //             const str2 = new_arr2.toString();
  //             if(str1 === str2) {
  //               return true;
  //             } else {
  //               return false;
  //             }
  //       }
        
  // }

  // const result = checkContent("mitgroup", "gmtiprou");

  // console.log(result);




// ====================================  TASK-C


// class Shop {
//         constructor(non, lagmon, cola) {
//                 this.non = non;
//                 this.lagmon = lagmon;
//                 this.cola = cola;
//         }

//      qoldiq() {
//         const hour = new Date().getHours();
//         const min = new Date().getMinutes();
//         console.log(`Hozir soat ${hour}:${min}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud`);
//      }

//      sotish(a, maxsulot) {
//                 if( typeof a === "string" && a.toLowerCase() === "non") {
//                     this.non -= maxsulot;   
//                 } else if( typeof a === "string" && a.toLowerCase() === "lagmon") {
//                         this.lagmon -= maxsulot;
//                 }else if(typeof a === "string" && a.toLowerCase() === "cola"){
//                         this.cola -= maxsulot;
//                 }
//          } 
         
//      qabul(b, maxsulot) {
//                 if( typeof b === "string" && b.toLowerCase() === "non") {
//                     this.non += maxsulot;   
//                 } else if( typeof b === "string" && b.toLowerCase() === "lagmon") {
//                         this.lagmon += maxsulot;
//                 }else if(typeof b === "string" && b.toLowerCase() === "cola"){
//                         this.cola += maxsulot;
//                 }
//          } 
// }

// const shop = new Shop(4, 5, 2);


//  shop.qoldiq();
//  shop.sotish("Non", 2);
//  shop.qabul("cola", 5);
//  shop.qoldiq();


//   ===============================  Task B

// function countDigit(txt) {
//        let total = 0;
//       for(let i = 0; i < txt.length; i++) {
//        // console.log(txt[i]);
//         if(! isNaN(txt[i])) {
//                 total++;
//         }
//       }
//       return total;
// }

// let result =countDigit("fg7he3b4nj5gff3crr5ht2");
// console.log(result);

//! isNaN(txt[i])




//  ============================= TASK-A

// function countLetter(a, b) {
//     let total = 0;
//     for(let i = 0; i < b.length; i++) {
//         if(b[i] == a) {
//            total += b[i].length;
//               }
//         }
//      return  console.log(total);
//     };   

// countLetter("b", "boburbobomurod");


