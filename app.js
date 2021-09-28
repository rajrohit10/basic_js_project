// // TARGET ELEMENTS
// const alert_El = document.querySelector(".alert");
// const input_El = document.querySelector(".input_todo");
// const submit = document.querySelector(".submit_form");
// // form_El = document.querySelector(".form");
// const item_ListEl = document.querySelector(".items_list");
// let edit_El;
// let editFlag = false;

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (input_El.value) {
//     //Means we are editing
//     if (editFlag) {
//       edit_El.children[0].children[0].textContent = input_El.value;
//       editFlag = false;
//       submit.className = "submit_form";
//       submit.textContent = "Submit";
//       input_El.value = "";

//       //Do edit Part
//     } else {
//       //We are just submittingls
//       //TASK OF ADDING DATA
//       const element = document.createElement("div");
//       element.innerHTML = `<div class="item">
//     <p>${input_El.value}</p>
//     <div class="btn-container">
//       <button class="btn edit-btn">EDIT</button>
//       <button class="btn delete-btn">DELETE</button>
//     </div>
//   </div>`;
//       item_ListEl.appendChild(element);
//       input_El.value = "";
//       getAlert("alert-success", "Item added to the list");
//       const dngrBtn = element.querySelector(".delete-btn");
//       //DELETE
//       dngrBtn.addEventListener("click", (e) => {
//         console.log(e.target.parentElement.parentElement.parentElement);
//         const targetElement =
//           e.target.parentElement.parentElement.parentElement;

//         item_ListEl.removeChild(targetElement);
//         getAlert("alert-danger", "Item deleted from the list");
//       });

//       //EDIT ELEMENT
//       const editBtn = element.querySelector(".edit-btn");
//       editBtn.addEventListener("click", (e) => {
//         edit_El = e.target.parentElement.parentElement.parentElement;
//         submit.className = "edit_form";
//         submit.textContent = "Edit";
//         console.log(edit_El.children[0].children[0].textContent);
//         input_El.value = edit_El.children[0].children[0].textContent;
//         console.log(input_El.value);
//         console.log(e.target.parentElement.parentElement.parentElement);
//         editFlag = true;
//       });
//     }
//   } else {
//     getAlert("alert-danger", "You have not entered any value");
//   }
// });

// const getAlert = (css_type, text) => {
//   alert_El.textContent = text;
//   alert_El.classList.add(css_type);

//   setTimeout(() => {
//     alert_El.textContent = "";
//     alert_El.classList.remove(css_type);
//   }, 3000);
// };

// // const deleteBtn=document.querySelectorAll('.delete-btn')
// // console.log(deleteBtn)
// // deleteBtn.forEach(btn=>{
// //     btn.addEventListener('click',(e)=>{
// //         console.log(e.target)
// //     })

// // })

// // const item=document.querySelector('.item');
// // const dngrBtn=item.querySelector('.delete-btn');
// // dngrBtn.addEventListener('click',()=>{
// //     console.log("Btn was clicked")
// // })

// // const sliderData=[
// //   {
// //     img:"./assets/img_big-Susan.jpg",
// //     name="Susan",
// //     job_profile="Sr. manager"
// //   },
// //   {
// //     img:"./assets/img_big-Susan.jpg",
// //     name="Susan",
// //     job_profile="Sr. manager"
// //   },
// //   {
// //     img:"./assets/img_big-Susan.jpg",
// //     name="Susan",
// //     job_profile="Sr. manager"
// //   },
// //   {
// //     img:"./assets/img_big-Susan.jpg",
// //     name="Susan",
// //     job_profile="Sr. manager"
// //   }
// // ]
// // let defaultSliderVal=0
// // // window.onload(addDataToSlider)

// //Slider logic

// // const addDataToSlider=()=>{
// //   const img=document.querySelector('.current-Img')
// //   img.setAttribute('src',sliderData[defaultSliderVal].img)

// // }

// // next.addEventListener(

// //   // defaultSliderVal=defaultSliderVal-1
// //   // let checkMyval=checkCurrentindex(defaultSliderVal)
// //   // defaultSliderVal=checkMyval

// //   defaultSliderVal=checkCurrentindex(defaultSliderVal-1)

// //   addDataToSlider()

// // )

// // next.addEventListener(
// //   defaultSliderVal=defaultSliderVal+1
// //   addDataToSlider()

// // )
// // checkCurrentindex(index)
// // if default val is 0
// // default val return the last index of the array

// // else if d val is the last index of array , then default val changes to 0  and return 0

// // else return index

//async await
//fetch
// ---------------

// fetch
//.then.catch

// -------
// axios
// //.then.catch

// -------
// axios
//async await

const githubuserContainer = document.querySelector(".github-users");
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const numberedBtns = document.querySelector(".dynamic-btn");

let githubusers = [];
let pagewiseUsers = [];
let currentPageValue = 0;
let totalPages = 0;

const pagination = () => {
  let noOfUsersPerPage = 4;
  let totalUser = githubusers.length;
  let totalNoOfPagesReqd = Math.ceil(totalUser / noOfUsersPerPage);
  totalPages = totalNoOfPagesReqd;

  for (let i = 0; i <= totalPages - 1; i++) {
    console.log(
      githubusers.slice(i * noOfUsersPerPage, (i + 1) * noOfUsersPerPage)
    );
    pagewiseUsers[i] = githubusers.slice(
      i * noOfUsersPerPage,
      (i + 1) * noOfUsersPerPage
    );

    //total github users 30
    //pages reqd to show them 4 in each page is 8
    //new user array 0th index- 0,1,2,3
    //1th index=4,5,6,7
    //2ndindex-8,9,10,11
    //12,13,14,15
    //16,17,18,19
    //20,21,22,23
    //24,25,26,27,
    //28,29
  }
  console.log(pagewiseUsers);
  displayUsers(currentPageValue);

  console.log(totalNoOfPagesReqd);
};
const checkCurrentValue = (value) => {
  if (value < 0) {
    return totalPages - 1;
  } else if (value > totalPages - 1) {
    return 0;
  } else {
    return value;
  }
};

const showAllBtns = () => {
  for (let i = 0; i <= totalPages - 1; i++) {
    const newBtn = document.createElement("button");
    newBtn.innerHTML = i + 1;
    newBtn.addEventListener("click", () => {
      currentPageValue = i;
      displayUsers(currentPageValue)
      console.log(currentPageValue);
    });
    numberedBtns.appendChild(newBtn);
  }
};

const displayUsers = (currentindex) => {
  githubuserContainer.innerHTML=""
  const usersToBeDisplayed = pagewiseUsers[currentindex];
  usersToBeDisplayed.forEach((item) => {
    const userElement = document.createElement("div");
    userElement.innerHTML = `
      <img
        src=${item.avatar_url}
        alt=${item.login}
        class="user-logo"
      />
      <h3>${item.login}</h3>
      <a href=${item.html_url} class="btn btn-light">Check Gitub Repo</a>
    `;
    userElement.classList.add("user");

    console.log(userElement);
    githubuserContainer.appendChild(userElement);
  });
};

const getGithubUsers = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    githubusers = data;
    console.log(data);
    console.log(response);
    // data.forEach((item) => {
    //   const userElement = document.createElement("div");
    //   userElement.innerHTML = `
    //   <img
    //     src=${item.avatar_url}
    //     alt=${item.login}
    //     class="user-logo"
    //   />
    //   <h3>${item.login}</h3>
    //   <a href=${item.html_url} class="btn btn-light">Check Gitub Repo</a>
    // `;
    //   userElement.classList.add("user");

    //   console.log(userElement);
    //   githubuserContainer.appendChild(userElement);
    // ); }

    pagination();
    showAllBtns();
  } catch (err) {
    console.log(err);
  }
};

getGithubUsers();

previousButton.addEventListener("click", () => {
  currentPageValue = currentPageValue - 1;
  currentPageValue = checkCurrentValue(currentPageValue); //7
  displayUsers(currentPageValue)
  console.log(currentPageValue);
});
nextButton.addEventListener("click", () => {
  currentPageValue += 1;
  currentPageValue = checkCurrentValue(currentPageValue);
  displayUsers(currentPageValue)
  console.log(currentPageValue);
});
