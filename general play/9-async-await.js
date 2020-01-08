
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    });
}

const doWork = async () => {
    const sum1 = await add(3, 7);
    const sum2 = await add(sum1, 5);
    const sum3 = await add(sum2, 20);
    return sum3;
}

doWork().then((result) => {
    console.log('Result is : ', result);
}).catch((e) => {
    console.log('Error: ', e);
})