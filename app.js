// TARGET ELEMENTS
const alert_El = document.querySelector(".alert");
const input_El = document.querySelector(".input_todo");
const submit = document.querySelector(".submit_form");
// form_El = document.querySelector(".form");
const item_ListEl = document.querySelector(".items_list");
let edit_El;
let editFlag = false;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input_El.value) {
    //Means we are editing
    if (editFlag) {
      edit_El.children[0].children[0].textContent = input_El.value;
      editFlag = false;
      submit.className = "submit_form";
      submit.textContent = "Submit";
      input_El.value = "";

      //Do edit Part
    } else {
      //We are just submittingls
      //TASK OF ADDING DATA
      const element = document.createElement("div");
      element.innerHTML = `<div class="item">
    <p>${input_El.value}</p>
    <div class="btn-container">
      <button class="btn edit-btn">EDIT</button>
      <button class="btn delete-btn">DELETE</button>
    </div>
  </div>`;
      item_ListEl.appendChild(element);
      input_El.value = "";
      getAlert("alert-success", "Item added to the list");
      const dngrBtn = element.querySelector(".delete-btn");
      //DELETE
      dngrBtn.addEventListener("click", (e) => {
        console.log(e.target.parentElement.parentElement.parentElement);
        const targetElement =
          e.target.parentElement.parentElement.parentElement;

        item_ListEl.removeChild(targetElement);
        getAlert("alert-danger", "Item deleted from the list");
      });

      //EDIT ELEMENT
      const editBtn = element.querySelector(".edit-btn");
      editBtn.addEventListener("click", (e) => {
        edit_El = e.target.parentElement.parentElement.parentElement;
        submit.className = "edit_form";
        submit.textContent = "Edit";
        console.log(edit_El.children[0].children[0].textContent);
        input_El.value = edit_El.children[0].children[0].textContent;
        console.log(input_El.value);
        console.log(e.target.parentElement.parentElement.parentElement);
        editFlag = true;
      });
    }
  } else {
    getAlert("alert-danger", "You have not entered any value");
  }
});

const getAlert = (css_type, text) => {
  alert_El.textContent = text;
  alert_El.classList.add(css_type);

  setTimeout(() => {
    alert_El.textContent = "";
    alert_El.classList.remove(css_type);
  }, 3000);
};

// const deleteBtn=document.querySelectorAll('.delete-btn')
// console.log(deleteBtn)
// deleteBtn.forEach(btn=>{
//     btn.addEventListener('click',(e)=>{
//         console.log(e.target)
//     })

// })

// const item=document.querySelector('.item');
// const dngrBtn=item.querySelector('.delete-btn');
// dngrBtn.addEventListener('click',()=>{
//     console.log("Btn was clicked")
// })
