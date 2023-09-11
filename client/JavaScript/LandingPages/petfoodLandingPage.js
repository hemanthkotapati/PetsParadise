// console.log(document.querySelector(".revdata").innerText);
// console.log(document.querySelector(".data").innerText);
let data = {
  products: [JSON.parse(document.querySelector(".data").innerText)],
  reviews: [JSON.parse(document.querySelector(".revdata").innerText)],
};

let card = document.getElementsByClassName("product-content");
let xyz = card[0];

for (let i = 0; i < data.products[0].length; i++) {
  xyz.innerHTML += `<div class="${data.products[0][i].petType} items">
   <img class="imgsrc " src="${data.products[0][i].productDetails.src}" style="width: 200px;">
       <div class="des"> <h3 class="title" >${data.products[0][i].productDetails.Name}</h3>
       <div class="prices" style="font-size:1.5rem;"><i class="fa-solid fa-indian-rupee-sign"></i>${data.products[0][i].productDetails.price}</div>
       </div>
       <p class="name" style="display: none;">${data.products[0][i].productDetails.Name}</p>
       <p class="price" style="display: none;">${data.products[0][i].productDetails.price}</p>
       <p class="src" style="display: none;">${data.products[0][i].productDetails.src}</p>
       <p class="type" style="display: none;">Food</p>
       <div class="product-cart"><a class="btn">Add to cart</a></div>
       </div>`;
}

// AJAX for review form
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("reviewForm");

//   form.addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent the default form submission

//       const formData = new FormData(form); // Serialize the form data

//       // Create an AJAX request
//       const xhr = new XMLHttpRequest();
//       xhr.open("POST", "/petsfoods/reviewform", true);
//       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//       // Handle the response
//       xhr.onreadystatechange = function () {
//           if (xhr.readyState === 4) {
//               if (xhr.status === 200) {
//                   // Successful response
//                   const response = JSON.parse(xhr.responseText);
//                   alert("Review submitted successfully!");
//                   // You can do more with the response if needed
//               } else {
//                   // Error response
//                   alert("An error occurred while submitting the review.");
//               }
//           }
//       };

//       // Send the form data
//       xhr.send(new URLSearchParams(formData));
//   });
// });

let revsub = document.getElementById("rev-sub");
revsub.addEventListener("click", (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "/petsfoods/reviewform", true);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText)
    } else {
      console.log("Some error occured");
    }
  };

  // alert(JSON.stringify({ review: document.getElementById("revtext").value }));

  xhr.send(
    JSON.stringify({ revtext: document.getElementById("revtext").value })
  );
});

// review fetching
let revcard = document.getElementsByClassName("review-slider");
let fetchRev = revcard[0];

for (let i = 0; i < data.reviews[0].length; i++) {
  fetchRev.innerHTML += `<div class="box">
        <h3>${data.reviews[0][i].Name}</h3>
        <p>${data.reviews[0][i].review}</p>
        </div>`;
}

function refresh() {
  let elements = document.querySelectorAll(".items");
  elements.forEach((ele) => {
    ele.classList.remove("inactive");
  });

  let dog = document.getElementsByClassName("dogs");
  let cat = document.getElementsByClassName("cats");
  let bird = document.getElementsByClassName("birds");
  let fish = document.getElementsByClassName("fishes");

  const ex = document.getElementsByClassName("button-value");

  for (let i = 0; i < ex.length; i++) {
    let check = ex[i];
    check.addEventListener("click", () => {
      switch (check.innerHTML) {
        case "All":
          for (let i = 0; i < 5; i++) {
            let c1 = cat[i];
            let c2 = bird[i];
            let c3 = fish[i];
            let c4 = dog[i];

            c1.classList.remove("inactive");
            c2.classList.remove("inactive");
            c3.classList.remove("inactive");
            c4.classList.remove("inactive");
          }
          check.classList.add("active");
          break;
        case "Dog":
          for (let i = 0; i < 5; i++) {
            let c1 = cat[i];
            let c2 = bird[i];
            let c3 = fish[i];

            c1.classList.add("inactive");
            c2.classList.add("inactive");
            c3.classList.add("inactive");
          }
          check.classList.add("active");
          break;
        case "Cat":
          for (let i = 0; i < 5; i++) {
            let c1 = dog[i];
            let c2 = bird[i];
            let c3 = fish[i];

            c1.classList.add("inactive");
            c2.classList.add("inactive");
            c3.classList.add("inactive");
          }
          check.classList.add("active");
          break;
        case "Bird":
          for (let i = 0; i < 5; i++) {
            let c1 = dog[i];
            let c2 = cat[i];
            let c3 = fish[i];

            c1.classList.add("inactive");
            c2.classList.add("inactive");
            c3.classList.add("inactive");
          }
          check.classList.add("active");
          break;
        case "Fish":
          for (let i = 0; i < 5; i++) {
            let c1 = dog[i];
            let c2 = bird[i];
            let c3 = cat[i];

            c1.classList.add("inactive");
            c2.classList.add("inactive");
            c3.classList.add("inactive");
          }
          check.classList.add("active");
          break;
      }
    });
    check.classList.remove("active");
  }
}

function convertFirstToUpper(value) {
  let v = value[0].toUpperCase();
  value = v + value.substr(1);
  console.log(value);
  return value;
}

// search
let show = document.querySelector(".product-content");

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  //    console.log(searchInput);
  let elements = document.querySelectorAll(".title");
  let cards = document.querySelectorAll(".items");
  //    console.log(elements);
  elements.forEach((element, index) => {
    if (element.innerHTML.includes(searchInput)) {
      cards[index].classList.remove("inactive");
      show.classList.add("view-search");
    } else {
      cards[index].classList.add("inactive");
    }
  });
});

// view more products
let view = document.querySelector(".viewbtn");
console.log(view.innerHTML);
const str1 = "View more";
view.addEventListener("click", () => {
  if (view.innerHTML === "View more") {
    show.classList.remove("view-search");
    show.classList.add("show-more");
    view.innerHTML = "Show Less";
  } else {
    show.classList.add("view-search");
    show.classList.remove("show-more");
    view.innerHTML = "View more";
  }
});
