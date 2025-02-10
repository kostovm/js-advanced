function wordsUppercase(input) {

    const regExp = /\w+/g;
    let result = [];

    let match = regExp.exec(input);

    while (match != null) {
        let word = match[0].toUpperCase();
        result.push(word)
        match = regExp.exec(input);
    }

    console.log(result.join(", "))

}