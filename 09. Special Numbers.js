function specialNumbers(num) {

    function sumDigits(n){
        let numArr = n.toString().split("");
    
        let sum = numArr.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0);
        
        return sum;
    }

    let flag = false;

    for(let i = 1; i <= num;i++) {
        flag = false;
       if (sumDigits(i) == 5 || sumDigits(i) == 7 || sumDigits(i) == 11){
            flag = true;
        }

        if(flag) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        
    }
}