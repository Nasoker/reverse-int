module.exports = function reverse (n) {
    n = Math.abs(n)
    let number = n.toString().split('').reverse().join('');
    return +number; 
}
