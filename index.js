function findWin(array) {
    return array.result === "W"
}



function superbowlWin(rec) {
    let hasWon = rec.find(findWin)
    if (typeof hasWon !== 'undefined') {return hasWon.year}   
}

