let container = document.querySelector(".container");
let ismousedown=false;
let slider=document.querySelector(".slider");
function pixelcalc(n) {
    const values = [48, 24, 16, 12];
    return values[n - 1];
};
function sketchgrid(size){
    let pixelsize=pixelcalc(slider.value)+"px";
    for(let i=0;i<(size*8);i++){
        let boxcontainer=document.createElement("div");
        boxcontainer.setAttribute("draggable", "false");
        boxcontainer.classList="boxcontainer";
        for(let x=0;x<(size*8);x++){
            let box=document.createElement("div");
            box.classList="box";
            boxcontainer.setAttribute("draggable", "false");
            box.style.width=pixelsize;
            box.style.height=pixelsize;
            box.addEventListener("mousedown", () => {
                box.style.backgroundColor="#393e46";
            });
            box.addEventListener("mouseenter", () => {
                if(ismousedown==true){
                    box.style.backgroundColor="#393e46";
                };
            });
            boxcontainer.appendChild(box);
        }
        container.appendChild(boxcontainer)
    };
};
function deleteboxes() {
    const containers = document.querySelectorAll('.boxcontainer');
    containers.forEach(container => {
        container.parentNode.removeChild(container);
    });
};
container.addEventListener("mousedown", () => {
    ismousedown=true;
});
container.addEventListener("mouseup", () => {
    ismousedown=false;
});
slider.addEventListener("input", () => {
    deleteboxes();
    sketchgrid(slider.value);
})
slider.value=2;
sketchgrid(2);
//https://palettes.shecodes.io/palettes/1435
//1 8boxes 48px
//2 16boxes 24px
//3 24boxes 16px
//4 32boxes 12px