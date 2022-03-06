function computerPlay () { 

    function randomNumber (min, max){
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    let Number = randomNumber();

    if (Number === 1) {
        let computerPick = 'Rock';
        console.log(computerPick);
        
    }
    else if (Number === 2) {
        let computerPick = 'Paper';
        console.log(computerPick);       
    }
    else {
        let computerPick = 'Scissors';
        console.log(computerPick);
    }
    
}