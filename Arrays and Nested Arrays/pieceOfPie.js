function pieceOfPie(stock, startPie, endPie) {

    const startIndex = stock.indexOf(startPie);
    const endIndex = stock.indexOf(endPie);
    let newArr = stock.slice(startIndex, endIndex + 1)
    return newArr;
}