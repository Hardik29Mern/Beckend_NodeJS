const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const mul = (a,b) => {
    return a*b;
}
const div = (a,b) => {
    return a/b;
}
const mod = (a,b) => {
    return a%b;
}
const area = (r) => {
    const pi=3.14
    return pi*r*r;
}
module.exports  = {add,sub,mul,div,mod,area}