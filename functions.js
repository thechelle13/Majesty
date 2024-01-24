const tributeChest = []; 

const payTribute = (tributeId, tributeDetail, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDetail,
        queenId: queenId
    }
    tributeChest.push(tributeObject)
}

module.exports = { payTribute, tributeChest }