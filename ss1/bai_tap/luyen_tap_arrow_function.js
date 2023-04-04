const inventory = [
    {type:   "machine", value: 10},
    {type:   "machine", value:  50},
    {type:      "duck", value:   10},
    {type: "furniture", value: 20},
    {type:   "machine", value:   10}
]

let totalMachineValue = ()=>{
    let sum=0;
    inventory.map(item =>{
        sum+=item.value;
    })
    return sum;
}


console.log(totalMachineValue())