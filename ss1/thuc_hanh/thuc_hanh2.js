let arr =[1,2,3,4];
let arr1=arr.filter(v=>v>2)
console.log(arr1)
let square = (item)=> item*item;

let mettho =(func,array) =>{
    let newArr=[]
    array.map(e => {
        newArr.push(func(e));
    });
    return newArr;
}
console.log(mettho(square,arr))