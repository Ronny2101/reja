console.log("Fronted js ishga tushdi");

function itemTemplate(item) {
    return ` <li
                  class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
                >
                  <span class="item-text">${item.reja}</span>
                  <div>
                    <button
                      data-id="${item._id}"
                      class="edit-me btn btn-secondary btn-sm mr-1"
                    >O'zgartirish
                    </button>
                    <button
                      data-id="${item._id}"
                      class="delete-me btn btn-danger btn-sm"
                    >O'chirish
                    </button>
                  </div>
                </li>`;
}

let createField = document.getElementById("create-field");

document
.getElementById("create-form").addEventListener("submit", function (event) {
   event.preventDefault();

   axios
   .post("/create-item",{reja: createField.value})
   .then((response) => {
    document
     .getElementById("item-list")
     .insertAdjacentHTML("beforeend", itemTemplate(response.data));
   createField.value = "";
   createField.focus();
})
   .catch((err) => {
    console.log("Iltimos qaytadan harakat qiling!");
   });
});

document.addEventListener("click", function (event) {
   //delete
   console.log(event.target);
   if(event.target.classList.contains("delete-me")) {
      if(confirm("Aniq o'chirmoqchimisiz")) {
        axios
        .post("/delete-item", { id: event.target.getAttribute("data-id")}) 
        .then((respose) => {
          console.log(respose.data);
          event.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling");
        });
      } 
   }

  //edit
   if(event.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
 }
});




// console.log("Fronted js ishga tushdi");

// function itemTemplate(item) {
//     return ` <li
//                   class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
//                 >
//                   <span class="item-text">${item.reja}</span>
//                   <div>
//                     <button
//                       data-id="${item._id}"
//                       class="edit-me btn btn-secondary btn-sm mr-1"
//                     >O'zgartirish
//                     </button>
//                     <button
//                       data-id="${item._id}"
//                       class="delete-me btn btn-danger btn-sm"
//                     >O'chirish
//                     </button>
//                   </div>
//                 </li>`;
// }

// const createField = document.getElementById("create-field");

// document
// .getElementById("create-form").addEventListener("submit", function (e) {
//    e.preventDefault();

//    axios
//    .post("/create-item",{reja: createField.value})
//    .then((response) => {
//     document
//      .getElementById("item-list")
//      .insertAdjacentHTML("beforeend", itemTemplate(response.data));
//    createField.value = "";
//    createField.focus();
// })
//    .catch((err) => {
//     console.log("Iltimos qaytadan harakat qiling!");
//    });
// });

// document.addEventListener("click", function (e) {
//    //delete
//    console.log(e.target);
//    if(e.target.classList.contains("delete-me")) {
//       if(confirm("Aniq o'chirmoqchimisiz")) {
//         axios.post("/delete-item", { id: e.target.getAttribute("data-id")}) 
//         .then((response) => {
//           console.log(response.data); // Fixed typo here (was 'respose')
//           e.target.parentElement.parentElement.remove();
//         })
//         .catch((err) => {
//           console.log("iltimos qaytadan harakat qiling");
//         });
//       } 
//    }

//   //edit
//    if(e.target.classList.contains("edit-me")) {
//      let userInput = prompt(
//        "O'zgartirish kiriting", 
//        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
//      );
     
//      if (userInput) {
//        axios.post("/update-item", {
//          id: e.target.getAttribute("data-id"),
//          newReja: userInput
//        })
//        .then((response) => {
//          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
//        })
//        .catch((err) => {
//          console.log("O'zgartirish vaqtida xatolik yuz berdi. Iltimos qaytadan harakat qiling!");
//        });
//      }
//    }
// });
