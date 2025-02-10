function solve() {

    let obj = {

        mage(name) {
            let newMage = {
                name,
                health: 100,
                mana: 100,

                cast(spell) {
                    console.log(`${this.name} cast ${spell}`);
                    this.mana--;
                }
            }

            return newMage;
        },

        fighter(name) {

            let newFighter = {
                name,
                health: 100,
                stamina: 100,

                fight() {
                    console.log(`${this.name} slashes at the foe!`);
                    this.stamina--;
                }
            }

            return newFighter;

        }
    }

    return obj;

}
