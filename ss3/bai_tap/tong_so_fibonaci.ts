let n0: number =0;
let n1: number =1;
let f=0;

let sum=0;
for (let i=0; i<20; i++){
    f=n0;
    console.log(f +",")
    sum+=f;
    let tam =n1;
    n1=n0+n1;
    n0=tam;
}