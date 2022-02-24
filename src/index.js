module.exports = function reverse (n) {
    let str;
    if (n < 0){
 str  = String(n).slice(1)
    }else{
    str = String(n)
    }
    let result =  Number(str.split('').reverse().join(''));
    
    
    return result
}
