let btn = document.querySelectorAll(".page");

btn.forEach(e => e.addEventListener("click", button => {
    const id = button.target.id;
    btn.forEach(btnRemoveClass => {
        btnRemoveClass.classList.remove("actived");
    });

    document.getElementById(id).classList.add("actived");
}))