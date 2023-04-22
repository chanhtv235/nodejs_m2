function countNumberFindValueInArray(array:Array<number>,value:number): number {
    let count=0;
    array.forEach(e=>{
        if (e==value){
            count ++;
        }
    })
 return count ;
}
let array =[1,2,3,4,1,4,1,5];
let value =1;
let count = countNumberFindValueInArray(array,value);
console.log(count)