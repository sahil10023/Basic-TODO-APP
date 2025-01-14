const inputText = document.querySelector("input");

document.querySelector("button").onclick = () => {
    if (inputText.value == "") return;

    const li = document.createElement("li");
    li.textContent = inputText.value;
    li.classList.add("listItem")

    const deleteButtom = document.createElement("button");
    deleteButtom.innerText = "Delete";
    deleteButtom.classList.add("delBtn");

    deleteButtom.addEventListener("click", () => {
        deleteButtom.parentElement.remove();
    })
    
    li.appendChild(deleteButtom);
    document.querySelector("ul").append(li);
    li.addEventListener("click", function () {
        this.style.textDecoration = "line-through";
    });
    inputText.value = "";
}