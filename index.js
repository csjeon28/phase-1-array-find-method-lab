function isWin(element, index, array) {
    return (element.result === "W")
}

function superbowlWin(record) {
    let winElement = record.find(isWin);
    if (winElement === undefined) {
      return winElement;
    } else {
      return winElement.year;
    }
}
