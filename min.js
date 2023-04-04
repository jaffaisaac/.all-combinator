// this is the list of all resolved promises
// promise.all() => this take an array of promise as arguments and returns a new promise that resolved  when all promise in the array have resolved
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(["book"])
const promise3 =Promise.resolve({name:"jaffa",age:23,location:"uganda"});

Promise.all([promise1,promise2,promise3])
.then( value =>console.log(value))