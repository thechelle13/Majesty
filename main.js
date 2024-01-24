const { payTribute, tributeChest } = require("./functions.js")
const { database } = require("./database.js")

const queens = [];

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId, 
        name: queenName
    }
    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3,"Christina Ashworth" )
createQueen(4, "Aja Washington" )
createQueen(5, "Reba Macintire" )



const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

for (const queen of database.queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

const athena = hailTheQueen("Athena Perez")
console.log(athena)

const charisse = hailTheQueen("Charisse Ford")
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis")
console.log(jenna)

const bob = hailTheQueen("Bob The Queen")
console.log(bob)

const mary = hailTheQueen("Mary Scotts")
console.log(mary)

// to see logical error of undefined in debug

// Here is the correct vocabulary.

// The value of undefined is at the end of the string that was returned by the function because no argument was provided when the function was invoked. Therefore, the nameString parameter retained its default value of undefined and that value was placed at the end of the string template.
const ramona = hailTheQueen()
console.log(ramona)

// to see a syntactical error
// const monica = hailTheQuen("Monica Dinglehopper")
// console.log(monica)


payTribute(1, "Gold", 1)
payTribute(2, "Gold", 2)
payTribute(3, "Gold", 3)
payTribute(4, "Gold", 4)



for (const queen of database.queens) {
    for ( const tribute of tributeChest) {
    if (tribute.queenId === queen.id) {
        console.log(`${queen.name} ${tribute.description}`)
    }
}
}
console.log(tributeChest)
console.log(queens)

