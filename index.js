function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    function named() {}
return named
}
function returnsAnAnonymousFunction(){
    return function () {} 
}