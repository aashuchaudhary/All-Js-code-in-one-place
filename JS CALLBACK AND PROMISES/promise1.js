console.log('this is a parameter');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5)
    {
        reject("No random no was not supporting you")
        }
    else {   
        setTimeout(() => {
            console.log("yea ia ma done");
            resolve("Ashutosh")
        }, 3000);
        }
})




let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5)
    {
        reject("Kaise Bhole ban ke hai baithe ")
        }
    else {   
        setTimeout(() => {
            console.log("chand shifarish");
            resolve("Ashu")
        }, 1000);
        }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5)
    {
        reject("fannah hun ishq mai tere: ")
        }
    else {   
        setTimeout(() => {
            console.log("chand ");
            resolve("Ashutosh")
        }, 1000);
        }
})


// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// note: catch ko use krte hai errror show nhi karwane ke liea. or kvi agr server down rha to user ko ky show hoga.

// then ka use krte hai agr prom1 hai to execute hoga.

// in promise ya to data chal jye sucessfulLY ya reject ho jye.

// promise.all mai dono promise resolve hona chyea 

let p4 = Promise.all([prom1, prom2,prom3]);
p4.then((a)=> {
    console.log(a);
}).catch(err=> {
    console.log(err);
})

//promise.allsetteled se chyea resolve ho  to staus and value mil jyegi or agr reject ho to rason mil jyeaga.


let p5 = Promise.allSettled([prom1, prom2]);
p5.then((a)=> {
    console.log(a);
}).catch(err=> {
    console.log(err);
})

let p6 = Promise.race([prom1, prom2]);
p6.then((a)=> {
    console.log(a);
}).catch(err=> {
    console.log(err);
})
let p7 = Promise.resolve([prom1, prom2]);
p7.then((a)=> {
    console.log(a);
}).catch(err=> {
    console.log(err);
})
let p8 = Promise.any([prom1, prom2]);
p8.then((a)=> {
    console.log(a);
}).catch(err=> {
    console.log(err);
})
let p9 = Promise.reject([prom1, prom2]);
p9.then((a)=> {
    console.log(a);
}).catch(err=> {
    console.log(err);
})

