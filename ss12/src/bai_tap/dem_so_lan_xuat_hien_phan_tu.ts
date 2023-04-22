export  function countElementInArray(arr:Array<number>, value: number) {
   let count:number =0;
   arr.forEach(e=>{
       if (e==value){
           count++;
       }
   })
    return count;
}