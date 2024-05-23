let container = document.querySelector(".container");
for(let i=0;i<16;i++){
    let boxcontainer=document.createElement("div");
    boxcontainer.classList="boxcontainer";
    for(let x=0;x<16;x++){
        let box=document.createElement("div");
        box.classList="box";
        box.addEventListener("click", () => {
            box.style.backgroundColor="black";
        });
        boxcontainer.appendChild(box);
    }
    container.appendChild(boxcontainer)
}