// function countLetter (letter, word) {
//     let count =0;
//     for (let char of word) {
//         if (char===letter) {

//         }
//     }
//     return count;
// }

// console.log(countLetter("e","enginer"));

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling",  //0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang",  //30-40
//     "siz kuchli bo'gan narsalarni qiling",  //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling,foydasi yo'q endi",  //60
// ];

// function maslahatbering(a, callback)  {
//     if (typeof a !==  "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback (null,list[1]);
//     else if (a > 30 && a <= 40) callback (null,list[2]);
//     else if (a > 40 && a <= 50) callback (null,list[3]);
//     else if (a > 50 && a <= 60) callback (null,list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list [5]);
//         }, 5000);
//         callback(null, list[5]);
//     }
// }
//  console.log("passed here 0");
// maslahatbering(35, (err, data) => {
//     if (err) console.log("ERROR:",err);
//     else {
//         console.log("javob",data);
//     }
// });


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling",  //0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang",  //30-40
//     "siz kuchli bo'gan narsalarni qiling",  //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling,foydasi yo'q endi",  //60
// ];

// function maslahatBering(a, callback)  {
//     if (typeof a !==  "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback (null,list[1]);
//     else if (a > 30 && a <= 40) callback (null,list[2]);
//     else if (a > 40 && a <= 50) callback (null,list[3]);
//     else if (a > 50 && a <= 60) callback (null,list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list [5]);
//         }, 1000);
//     }
// }
//  console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:",err);
//     else {
//         console.log(data);
//     }
// });
//  console.log("passed here 1");


// console.log("Jack Ma maslahatlari");
//  const list = [
//      "yaxshi talaba boling",  //0-20
//      "togri boshliq tanlang va koproq xato qiling", // 20-30
//      "uzingizga ishlashni boshlang",  //30-40
//      "siz kuchli bo'gan narsalarni qiling",  //40-50
//      "yoshlarga investitsiya qiling", //50-60
//      "endi dam oling,foydasi yo'q endi",  //60
//  ];

//  async function maslahatBering(a)  {
//      if (typeof a !==  "number") throw new Error("insert a number");
//      else if (a <= 20) return list[0];
//      else if (a > 20 && a <= 30) return list[1];
//      else if (a > 30 && a <= 40) return  list[2];
//      else if (a > 40 && a <= 50)return list[3];
//      else if (a > 50 && a <= 60) return  list[4];
//      else {
//         return new Promise((resolve, reject)  => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
        
        
//         // return list[5];
//     //  setTimeout(function(){
//     //    return list[5];
//     //   }, 5000);
//    }
//  }
 //then/catch
//    console.log("passed here 0");
//  maslahatBering(20) 
//  .then( (data) => {
//     console.log("javob:", data);
//  })
//       .catch((err) => {
//         console.log("ERROR:", err);
//       });
//      console.log("passed here 1");
     //async //await
//      async function run() {
//         let javob = await maslahatBering(65);
//         console.log(javob);
//         javob = await maslahatBering(51);
//         console.log(javob);
//         javob = await maslahatBering(41);
//          console.log(javob);
//   }
//      run();
  

//Task A
// function countLetter(letter, word) {
//     let count =0;
//     for (let char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e","engineer"));


// const liste = ["ad2a54y79wet0sfgb9"];
// const digits = liste[0].split('').filter((char) => {
//   return char === '';
// });




// function countDigits(str) {
//      let count = 0;
//      for (let i = 0; i< str.length; i++) {
//           if (str[i] >= '0' || str[i]<='9') {
//                count++;
//           }
//      }
//      return count;
// }

// console.log(countDigits("guyd7e27736764gdyg"));
 

//task c


// 


//Tack D

// function checkContent(string1,string2) {
//   return string1.split("").sort().join("") === string2.split("").sort().join("");

// }

// console.log(checkContent("mitgroup","groupmit"));

      
// E Task

// function getReverse(string1,) {
//        return string1.split("").reverse().join("");  
//       }
     
//      console.log(getReverse("hello"));
     

//Task F

function findDoublers(str) {
     return str.split("").some((char, i) => str.indexOf(char) !== i);
 }
 
 
 console.log(findDoublers("hello")); 