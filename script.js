const inputText = document.querySelector("input");


document.querySelector("button").onclick = () => {
    if (inputText.value == "") return;
    const li = document.createElement("li");
    li.textContent = inputText.value;

    document.querySelector("ul").append(li);
    inputText.value = "";
    li.addEventListener("click", function () {
        this.style.textDecoration = "line-through"; 
    });
}
