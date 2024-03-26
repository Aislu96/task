parallel([
    function (resolve) {
        setTimeout(function () {
            resolve(10);
        }, 50);
    }, function () {
        return 5;
    }, function (resolve) {
        setTimeout(function () {
            resolve(0)
        }, 10)
    }
], function (results) {
    console.log(results);
})

async function parallel(arrFunction, showResultFunc) {
    let results =  await Promise.all(arrFunction.map((func) => {
        return new Promise((resolve) => {
            if (func.length > 0) {
                func(resolve);
            } else {
                resolve(func());
            }
        })
    }));
    // results.then(data => showResultFunc(data));
    return showResultFunc(results);
}


// async function parallel(arr, cb) {
//     arr = arr.map(e => new Promise((resolve) => {
//             const func = e(resolve);
//             func === undefined ? func : resolve(e());
//         })
//     );
//
//     let result = await Promise.all(arr);
//     cb(result);
// }

// parallel([
//     function (resolve) {
//         setTimeout(function () {
//             resolve(10);
//         }, 50);
//     }, function () {
//         return 5;
//     }, function (resolve) {
//         setTimeout(function () {
//             resolve(0)
//         }, 10)
//     }
// ], function (results) {
//     console.log(results);
// })
