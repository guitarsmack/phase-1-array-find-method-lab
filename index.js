function superbowlWin(array){
    const win = array.find(item => item.result === "W")
    if (win!=undefined){return win.year}
}
