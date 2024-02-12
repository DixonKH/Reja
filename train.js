//   ===============================  Task B

function countDigit(txt) {
       let total = 0;
      for(let i = 0; i < txt.length; i++) {
       // console.log(txt[i]);
        if(! isNaN(txt[i])) {
                total++;
        }
      }
      return total;
}

let result =countDigit("fg7he3b4nj5gff3crr5ht2");
console.log(result);

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




// // ===================================     Asynchronous and Callback functions


// console.log("Jack Ma maslahatlari: ");

// const list = [
//     "Yaxshi talaba boling",
//     "Togri boshliq tanlang va koproq hato qiling",
//     "Uzingizga ishlashni boshlang",
//     "Siz kuchli bolgan narsalarni qiling",
//     "Yoshlarga invistitsiya qiling",
//     "Endi dam oling, foydasi yoq endi"
// ];

// // Callback function: 

// function maslahatBering(a, callback) {
//     if( typeof a !== 'number') callback("insert a number", null);    // bu yerda callback function parametrlari error va data boladi
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {         // bunda setInterval function ishlatsak javob har 2 sec da keladi
//             callback(null, list[5]);
//         }, 2000)
//     }
// }

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {               // bu yerda callback function chaqirishda parametr sifatida functiondan foydalaniladi
//      if(err) console.log("ERROR: ", err);        
//      else {console.log("Javob:", data);}
// });
// console.log("passed here 1");


// ASYNCHRONOUS function:
// Bu function synchronous functionlar toolliq ishga tushib bo'lgach ishga tushadi. Bunda setTimeOut setInterval functionlar ishlamaydi

// async function maslahatBering(a) {
//     if( typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {

//         return new Promise((resolve, reject) => {
//             // setTimeout(function () { 
//             //          resolve(list[5]);
//             //       }, 5000);
//             setInterval(function () {   // setIntervalda har 2 sec da javob olishimiz kk edi lk, Promise function ichida faqat bir martta ishlaydi
//                 resolve(list[5]);
//              }, 2000);
//         });
        // setTimeout(function () { 
        //     return list[5];
        // }, 2000);
//     }
// }

// call via then/catch:
// ========================================================

// console.log("passed here 0");
// maslahatBering(30).then(data => {
//         console.log("Javob:", data);
// }).catch(err => {
//     console.log("Error: ", err);
// });
// console.log("Passed here 1");


// call via aynch/await:  Asynchronous function await qismida tolliq javob olmaguncha u keyingi satrga otmaydi.
// ========================================================

//     async function run() {
//             let javob = await maslahatBering(65);
//             console.log(javob);
//             javob = await maslahatBering(66);
//             console.log(javob);
//             javob = await maslahatBering(41);
//             console.log(javob);
// }
// run();
