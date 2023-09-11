// let icon = document.querySelector(".iclose");
// let box = document.querySelector(".updatebox");

// icon.addEventListener("click", () => {
//   box.classList.add("inactive");
// });

// let button = document.querySelector(".updatebutton");

// button.addEventListener("click", () => {
//   box.classList.remove("inactive");
// });

// let submit = document.querySelector(".submit");
// let inpFname = document.querySelector("#newFname");
// let inpLname = document.querySelector("#newLname");
// const regex = /^[a-zA-Z\s]*$/;
// submit.addEventListener("click", (event) => {
//   if (inpFname.value === "" && inpLname.value === "") {
//     window.alert("You have to change atleast one field");
//     event.preventDefault();
//   } else if (!regex.test(inpFname.value) || !regex.test(inpLname.value)) {
//     window.alert("please make sure there are no numbers in your name");
//     event.preventDefault();
//   } else {
//     let conf = window.confirm(
//       "Confirm changes :\nFirst name : " +
//         inpFname.value +
//         "\nLast name : " +
//         inpLname.value
//     );

//     if (!conf) {
//       event.preventDefault();
//     }
//   }
// });

// // let cancel = document.querySelectorAll("#cancel");
// // let app = document.querySelectorAll(".appointmentbox");
// // console.log(app);
// // for(let i=0; i < cancel.length; i++) {
// //     cancel[i].addEventListener(('click'),(event) =>{
// //            let c = window.confirm("Confirm appointment cancellation");
// //            if(!c){
// //             event.preventDefault();
// //            }else{
// //             app[i].classList.add('inactive');
// //            }
// //         })

// // }

let icon = document.querySelector(".iclose");
let box = document.querySelector(".updatebox");

icon.addEventListener("click", () => {
  box.classList.add("inactive");
});

let button = document.querySelector(".updatebutton");
button.addEventListener("click", () => {
  box.classList.remove("inactive");
});

let submit = document.querySelector(".submit");
let inpFname = document.querySelector("#newFname");
let inpLname = document.querySelector("#newLname");
const regex = /^[a-zA-Z\s]*$/;
submit.addEventListener("click", (event) => {
  if (inpFname.value === "" && inpLname.value === "") {
    window.alert("You have to change atleast one field");
    event.preventDefault();
  } else if (!regex.test(inpFname.value) || !regex.test(inpLname.value)) {
    window.alert("please make sure there are no numbers in your name");
    event.preventDefault();
  } else {
    let conf = window.confirm(
      "Confirm changes :\nFirst name : " +
        inpFname.value +
        "\nLast name : " +
        inpLname.value
    );

    if (!conf) {
      event.preventDefault();
    }
  }
});

var doctor = document.getElementsByClassName("doctor")[0];
var all = document.getElementsByClassName("all")[0];
var salon = document.getElementsByClassName("salon")[0];

function displayAll() {
  doctor.style.display = "none";
  salon.style.display = "none";
  all.style.display = "block";
}

function displayDoc() {
  doctor.style.display = "block";
  salon.style.display = "none";
  all.style.display = "none";
}

function displaySal() {
  doctor.style.display = "none";
  salon.style.display = "block";
  all.style.display = "none";
}

var more = document.getElementsByClassName("more")[0];
function intial() {
  doctor.style.display = "none";
  salon.style.display = "none";
  more.style.display = "none";
}
intial();

function viewLess() {
  more.style.display = "none";
}

function viewMore() {
  more.style.display = "block";
}
