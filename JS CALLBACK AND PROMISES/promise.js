// alert('Ashu');
console.log('This is promises');

let prom1 = new Promise((resolve, reject) => { 
    
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you")
    }
    else {
        
        
        setTimeout(() => {
            console.log("Yes i am done")
            resolve("Ashu")
            reject()
        }, 3000);
    }
})
    
let prom2 = new Promise((resolve, reject) => { 
    
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you 2")
    }
    else {
        
        
        setTimeout(() => {
            console.log("Yes i am done 2")
            resolve("Ashu d")
            reject()
        }, 3000);
    }
    })

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

let p3 = Promise.all([prom1 , prom2])

p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let p4 = Promise.allSettled([prom1 , prom2])

p4.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let p6 = Promise.race([prom1 , prom2])

p6.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let p7 = Promise.any([prom1 , prom2])

p7.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let p8 = Promise.resolve([prom1 , prom2])

p8.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let p9 = Promise.reject([prom1 , prom2])

p9.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})
