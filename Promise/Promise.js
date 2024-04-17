//Каким будет вывод этого фрагмента кода?

//     console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
// console.log('end');
//start, 1, end.


//Каким будет вывод этого фрагмента кода?

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');
//start 1 end 2

//Каким будет вывод этого фрагмента кода?

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');

//start 1 3 end 2

//Каким будет вывод этого фрагмента кода?

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
// promise1.then(res => {
//     console.log(2)
// })
//
// console.log('end');

//start 1 end

//Каким будет вывод этого фрагмента кода?
// console.log('start')
//
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))
//
// console.log('middle')
//
// fn().then(res => {
//     console.log(res)
// })
//
// console.log('end');

//start middle 1 end success

//Каким будет вывод этого фрагмента кода?
//     console.log('start')
//
//     Promise.resolve(1).then((res) => {
//         console.log(res)
//     })
//
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
//
// console.log('end')

//start end 1 2
