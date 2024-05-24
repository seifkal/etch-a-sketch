let container = document.querySelector(".container");
for(let i=0;i<16;i++){
    let boxcontainer=document.createElement("div");
    boxcontainer.classList="boxcontainer";
    for(let x=0;x<16;x++){
        let box=document.createElement("div");
        box.classList="box";
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor="#393e46";
        });
        boxcontainer.appendChild(box);
    }
    container.appendChild(boxcontainer)
};
let slider=document.querySelector(".slider");
slider.value=1;
function sketchgrid(){
    for(let i=0;i<16;i++){
        let boxcontainer=document.createElement("div");
        boxcontainer.classList="boxcontainer";
        for(let x=0;x<16;x++){
            let box=document.createElement("div");
            box.classList="box";
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor="#393e46";
            });
            boxcontainer.appendChild(box);
        }
        container.appendChild(boxcontainer)
    };
}
//https://palettes.shecodes.io/palettes/1435