let num = [2, 3, 4, 5, 10, 11]

for(i = 0; i < num.length; i++){
    
    let numero = num[i]
    let primo = true;

    for(j = 2; j < numero; j++){
        if(numero % j === 0){
            primo = false;
        }
    }
    
        if(primo){
            console.log(numero);
        }
}

// desafio complicado


