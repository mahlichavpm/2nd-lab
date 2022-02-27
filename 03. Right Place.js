function solve(string, char, result) {

    let final= string.replace("_",char);
    if (final == result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}