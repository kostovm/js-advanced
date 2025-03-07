function playingCards(face, suit) {
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = { "C": "\u2663", "D": "\u2666", "H": "\u2665", "S": "\u2660" };

    if (faces.includes(face) == false) {
        throw new TypeError("Invalid face");
    } else if (suits.hasOwnProperty(suit) == false) {
        throw new TypeError("Invalid suit");
    }

    let result = {
        face,
        suit,
        toString() {
            return this.face + suits[this.suit];
        }
    };
    return result;
}