
function add(a,b){
    return a+b
}
function substract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}

function divide(a,b){
    if (b!==0){
        return a/b}
else{console.log("cannot divide by zero")}

}

function assert (expected, actual,message){

if (expected===actual){
    return true
}
    console.log(message)

}

// console.log(6===6)
// console.log(2===substract(4,2))
// console.log(8===multiply(4,2))
// console.log(2===divide(4,0))

//assert(6, add(4,2),"add happy pach") //=>True
assert(6, add(4,2),"add happy pach")
assert(6, add(4,2),"not realy")