//print odds
for (var i=0; i<20; i++){
    if (i%2 != 0){
        console.log(i);
    }
}

//Decreasing Multiples of 3
for (var i=100; i>0; i--){
    if (i%3==0){
        console.log(i);
    }
}
//Print the sequence
var x = 5.5;
for (var i=0; i<6; i++){
    x -= 1.5;
    console.log(x);
}
//Sigma
var sum = 0;
for (var i=1; i<=100; i++){
    sum += i;
}
console.log(sum);
//Factorial
var product = 1;
for (var i=1; i<=12; i++){
    product = product*i;
}
console.log(product);