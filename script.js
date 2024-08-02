const input = document.querySelector(".form-input")
const todolist = document.querySelector(".todo-lists")
const btnadd = document.querySelector(".btn-add")

btnadd.addEventListener("click",()=>{
    if(input.value == ""){
        alert("Enter the Task")
    }
    else{
        createtask(input.value)
    };
    savedata();
})

function createtask(value){
    let list = `
            ${value}
            <span>
                <i class='bx bxs-pencil menu-icon' id="edit" ></i>
                <i  class='bx bx-x menu-icon' id="delete"></i>
            </span>`
    let li = document.createElement('li')
    li.className = "todo-list"
    todolist.appendChild(li).innerHTML = list  
    input.value = ""
}


todolist.addEventListener("click",(el)=>{
    if(el.target.tagName === "LI"){
        el.target.classList.toggle("checked")
    }
    else if(el.target.id ==="edit"){
        input.value = el.target.parentElement.parentElement.innerText
        removetask(el)
    }
    else if(el.target.id ==="delete"){
        removetask(el)
        savedata();
    }
})

function removetask(element){
    element.target.parentElement.parentElement.remove()
}

function savedata() {
        localStorage.setItem('data', todolist.innerHTML);
};

function setData() {
    todolist.innerHTML = localStorage.getItem('data');
};

setData();
