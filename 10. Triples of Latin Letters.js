function latinLetters (num) {

    for(let i = 0; i < num; i++) {
        for(let x = 0; x < num; x++){
            for(let y = 0; y < num; y++){

                let firstChar = String.fromCharCode(97+i);
                let secondChar = String.fromCharCode(97+x);
                let thirdChar = String.fromCharCode(97+y);

                console.log(firstChar,secondChar,thirdChar);
            }
        }
    }
}
