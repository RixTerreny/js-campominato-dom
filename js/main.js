const btn = document.getElementById("btn");
let triggerBomba = false;

/**
 * @param {number} numBox numero di celle
 */
function gridGenerator(numBox) {
    const boxContainer = document.querySelector(".box-container");
    let totBox = numBox*numBox;
    boxContainer.innerHTML = ""

    let punteggio=0;

    //creazione caselle
    for (let i = 0; i < totBox; i++) {
        boxContainer.innerHTML += `<div class='box ' style='flex-basis: calc(100%/ ${numBox})'> ${i+1}</div>`;
        }

        const boxesList= boxContainer.querySelectorAll(".box");

        for (let i = 0; i < boxesList.length; i++) {
            const box = boxesList[i];

            box.addEventListener("click", function(){
                if (triggerBomba == true){
                    return;
                }
                if(this.classList.contains("bg-primary")){
                    return;
                }
                this.classList.add("bg-primary");
                punteggio++;
                console.log(punteggio);

                if (punteggio==84){
                    alert("🎇Hai vinto🎆")
                }
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
            if (triggerBomba == true){
                return;
            }
            for (let j = 0; j < arrBomb.length; j++){
                arrayDiv[arrBomb[j]].classList.remove("bg-primary");
                arrayDiv[arrBomb[j]].classList.add("bomb");
            }

            punteggio--;

            alert("Hai Perso, il tuo punteggio è "+ punteggio);
            triggerBomba = true;
        })
    };

}
    

btn.addEventListener("click", function(){
    btn.classList.toggle("bg-primary");
    btn.classList.toggle("bg-secondary");
    gridGenerator(10);
});
