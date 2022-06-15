

let counter = 0;
let firstSelection = "";
let secondSelection = "";


const cards  = document.querySelectorAll(".cards .card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
       card.classList.add("clicked");

       if(counter === 0){
        firstSelection = card.getAttribute("animal");
        counter++;
    }else{
        secondSelection = card.getAttribute("animal");
        counter = 0;

        if(firstSelection === secondSelection){
            const correctCards = document.querySelectorAll
            (".card[animal='" + firstSelection + "']");
            
            correctCards[0].classList.add("checked");
            correctCards[0].classList.remove("clicked");
            correctCards[1].classList.add("checked");
            correctCards[1].classList.remove("clicked");
        } else{
            const incorrectCards = document.querySelectorAll(".card.clicked");

            incorrectCards[0].classList.add("shake");
            incorrectCards[1].classList.add("shake");

            setTimeout(() => {
                incorrectCards[0].classList.remove("shake");
                incorrectCards[0].classList.remove("clicked");    
                incorrectCards[1].classList.remove("shake");
                incorrectCards[1].classList.remove("clicked");    
            },800);
        }

    }
    });
});