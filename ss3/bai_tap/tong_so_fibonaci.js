var n0 = 0;
var n1 = 1;
var f = 0;
var sum = 0;
for (var i = 0; i < 20; i++) {
    f = n0;
    console.log(f + ",");
    sum += f;
    var tam = n1;
    n1 = n0 + n1;
    n0 = tam;
}
