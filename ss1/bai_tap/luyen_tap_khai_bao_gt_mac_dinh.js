function lastIndexOf(arr, elt, start) {
    for (let i = start - 1; i >= 0; i--)
        if (arr[i] === elt) return i
    return -1
}
console.log(lastIndexOf([1, 2, 1, 2], 2))
//
function lastIndexOfMe(arr,elt, start=-1){
    let size =start;
    if (start==-1){
        size=arr.length
    }
    for (let i = size - 1; i >= 0; i--)
        if (arr[i] === elt) return i
    return -1
}

