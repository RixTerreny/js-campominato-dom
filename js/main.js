const btn = document.getElementById("btn");

/**
 * @param {number} numBox numero di celle
 */
function gridGenerator(numBox) {
    const boxContainer = document.querySelector(".box-container");
    let totBox = numBox*numBox;
    boxContainer.innerHTML = ""

    //creazione caselle
    for (let i = 0; i < totBox; i++) {
        boxContainer.innerHTML += `<div class='box ' style='flex-basis: calc(100%/ ${numBox})'> ${i+1}</div>`;
        }

        const boxesList= boxContainer.querySelectorAll(".box");

        for (let i = 0; i < boxesList.length; i++) {
            const box = boxesList[i];

            box.addEventListener("click", function(){
                this.classList.toggle("bg-primary");
                console.log( i + 1);
            });
    }

    //creazione bombe
    let arrBomb = [];
    while(arrBomb.length < 16){
        let r = Math.floor(Math.random() * 100) + 1;
        if(arrBomb.indexOf(r) === -1){
            arrBomb.push(r);
        };
    }
    console.log(arrBomb);

    //assegnazione bombe alle caselle
    for (let i = 0; i < arrBomb.length; i++) {
        let arrayDiv = document.querySelectorAll(".box");
        
        arrayDiv[arrBomb[i]].addEventListener("click", function(){
            this.classList.remove("bg-primary");
            arrayDiv[arrBomb[i]].classList.add("bomb");
            alert("Hai Perso")
        })
    };

}
    

btn.addEventListener("click", function(){
    btn.classList.toggle("bg-primary");
    btn.classList.toggle("bg-secondary");
    gridGenerator(10);
});
