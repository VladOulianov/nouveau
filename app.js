var userChoise = prompt("choisisez entre feuille ciseau pierre")
console.log(userChoise);

var computerChoise = Math.random()
console.log(computerChoise);
if (computerChoise < 0.33 ){
    computerChoise = "feuille"
}else if (computerChoise <= 0.67){
    computerChoise= "ciseau"
}else{
    computerChoise="pierre"
}
console.log(computerChoise);

var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "equalité"
    }


    else if(choice1 === "pierre"){
        if (choice2 === "ciseau"){
            return "pierre gagne"
        }
        else if (choice2 === "feuille"){
            return "feuille à gagne"
        }
    }


    else if(choice1 === "feuille"){
        if (choice2 === "ciseau"){
            return "ciseau gagne"
        }
        else if (choice2 === "pierre"){
            return "feuille à gagne"
        }
    }


    else if(choice1 === "ciseau"){
        if (choice2 === "feuille"){
            return "ciseau gagne"
        }
        else if (choice2 === "pierre"){
            return "pierre à gagne"
        }
    }
    
}

console.log("resulta : " , compare(userChoise,computerChoise));
