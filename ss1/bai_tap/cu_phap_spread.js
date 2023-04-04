// function replace(array, from, to, elements) {
//     array.splice.apply(array, [from, to - from].concat(elements))
// }
// //viêt lại
// function myReplace(...item){
//     array.splice.apply(item[0], [item[1], item[2] - item[1]].concat(item[3]))
// }
//
// let testArray = [1, 2, 100, 100, 6]
// replace(testArray, 2, 4, [3, 4, 5])
// console.log(testArray)

function copyReplace(array, from, to, elements) {
    return array.slice(0, from).concat(elements).concat(array.slice(to))
}
// viết lại
function myCopyReplace(array, from, to, elements) {
    return [...array.slice(0, from),...elements,...array.slice(to)];
}

console.log(myCopyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))


let customerOrder = []

function recordOrders(time) {
    customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
}
// viết lại
function myRecordOrders(time,...birds) {
    // customerOrder.push({time:time,birds:birds});
    customerOrder.push({time,birds});
}

myRecordOrders(new Date, "coffee", "yaourt", "pizza")
myRecordOrders(new Date, "coffee1", "yaourt1", "pizza1")

console.log(customerOrder)