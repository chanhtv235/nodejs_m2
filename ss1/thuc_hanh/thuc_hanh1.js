let car1 =["Honda","Mazda","Toyota"]
let car2=[];
let car3=[];
car2=[...car1];
car3=[...car1,"Yamaha", "Suzuki"];
console.log(car1)
console.log(car2)
console.log(car3)
let car4 =[...car1,...car2];
console.log(car4);

[a,b,...other] =car1;
console.log(a);
console.log(b)
console.log(other)

let moto ={
    name: "Toyota",
    price: 1000
}
let moto1={
    color: "red",
    price: 200
}

let motor3 ={...moto,...moto1}
console.log(motor3)