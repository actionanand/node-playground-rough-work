
// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([3,1,7])
//     } ,2000);
// })

// doWorkPromise.then((result) => {
//     console.log(result);
// })

//with argument

// const doWorkPromise = (x) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve([3,1,7])
//             reject('Something went wrong!')
//         }, x);
//     });
// }

// doWorkPromise(2000).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    });
}

add(3, 7).then((sum) => {
    console.log(sum);
}).catch((e) => {
    console.log(e);
});