// function compress(arr) {
//     arr = arr.sort((a, b) => a - b);
//     let str = '';
//     for (let i = 0; i <= arr.length; i++) {
//         if(arr.length === i) {
//             str += arr[i - 1];
//         } else if (arr[i] === arr[i + 1] - 1  && str.length === 0) {
//             str += arr[i];
//         } else if (arr[i] !== arr[i + 1] - 1 && arr[i - 1] === arr[i] - 1) {
//             str += `-${arr[i]},`;
//         } else if (arr[i] === arr[i + 1] - 1 && str.length !== 0 && arr[i - 1] !== arr[i] - 1) {
//             str += arr[i];
//         } else if(i === 0){
//             str += arr[i] + ',';
//         }
//     }


    // let value = arr[0];
    // for( let i = 1; i < arr.length; i++) {
    //     if( i === arr.length - 1) array.push(arr[i]);
    //     if (arr[i - 1] === arr[i] - 1) continue;
    //
    //     if (arr[i - 1] !== arr[i] - 1) {
    //         array.push(value + '-' + arr[i - 1])
    //         value = arr[i];
    //     }
    // }
    //

//     return str;
// }
// function compress(list) {
//     const sortedArr = list.sort((a,b)=>a>b?1:-1);
//     const result = [];
//     let position = 0;
//
//     for (let i=1; i<=sortedArr.length; ++i){
//         if (sortedArr[i]-i+position!==sortedArr[position]){
//             if (sortedArr[i-1] === sortedArr[position]){
//                 result.push(sortedArr[position].toString());
//             } else {
//                 result.push(sortedArr[position] + '-' + sortedArr[i-1]);
//             }
//             position = i;
//         }
//     }
//
//     return result.join(',');
// }
//
// console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
// console.log(compress([1, 4, 3, 2])) // '1-4'
// console.log(compress([1, 4])) // '1,4'


// Реализовать функцию так чтобы sum(2,3) === sum(2)(3));
//
// function sum(a, b) {
//     if(b === undefined) {
//         return (b) => {
//             return a + b;
//         }
//     }
//     return a + b;
// }
// console.log(sum(2,3));
// console.log(sum(2)(3));


//Сделать последовательные запросы (fetch) для следующих урлов:

// async function promise(urls) {
//     for(let i = 0; i < urls.length; i++){
//         await fetch(urls[i].then(() => {}));
//     }
// }
//
// urls.reduce((memory, url) => {
//     return memory.then(() => fetch(url))
// }, Promise.resolve)
// fetch(url[0]).then(() => fetch(url[1])).then(()=> fetch(url[2]));

//написать все способы чтобы вызвать метод showSite c нужным контекстом

// function showSite() {
//     console.log(this.site)
// }
//
// const company = {
//     site: 'asdasdasa'
// }
//
// showSite.bind(company)();
