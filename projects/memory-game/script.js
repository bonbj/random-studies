let itens = ["c","c","cpp","cpp","css","css","git","git","go","go","html","html","java","java","js","js","python","python","react","react","ruby","ruby","sql","sql"];
let cardA = undefined;
let cardB = undefined;
let points = 0;
//call function on init page
$( document ).ready(() => {
    randomizeCards();
});

//randomize cards
function randomizeCards(){
    //Shuffle 
    itens.sort((a, b) => { return 0.5 - Math.random() });
    itens.forEach((element,index) => {
        $(".game").append(
            `<div class="card" id="${element}-${index}">
                <p class="card-text" id="${element}-${index}-text">?</p>
                <img class="tech-img" id="${element}-${index}-text-img" src="./img/${element}.svg">
            </div>`
        );
    });
}

function showCard(id){
    if(id.includes("text")){
        $(`#${id}`).hide();
        $(`#${id}-img`).show();
    }else{
        $(`#${id}-text`).hide();
        $(`#${id}-text-img`).show();
    }
}

function hideCard(card) { 
    $(`#${card[0]}-${card[1]}-text-img`).hide();
    $(`#${card[0]}-${card[1]}-text`).show();
}

$(".game").click((e) => { 
    if(e.target.className.includes("card")){
        if(cardA === undefined){
            cardA = e.target.id.split("-");
            showCard(e.target.id);
        }else{
            cardB = e.target.id.split("-");
            showCard(e.target.id);
            if(cardA[0] === cardB[0]){
                points++;
                cardA = undefined;
                cardB = undefined;
            }else{
                setTimeout(() => {
                    hideCard(cardA);
                    hideCard(cardB);
                    cardA = undefined;
                    cardB = undefined;
                },100);
            }
        }

        if(points === itens.length/2){
            $(".game").hide();
            $(".win").show();
        }
    }
});

$(".restart").click(() => {
    points = 0;
    $(".win").hide();
    $(".game").empty();
    randomizeCards()
    $(".game").show();
});