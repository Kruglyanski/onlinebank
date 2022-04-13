// function isUnique(string) {
//     for (let i=0; i < string.length; i++) {
//         const newStr = string.slice(0, i) + string.slice(i + 1)
//         if(newStr.includes(string[i])) {
//             return false
//         };
//     }
//     return true;
// }

// function isUnique(string) {
//     for (let i=0; i < string.length; i++) {
//         if(string.lastIndexOf(string[i]) !==i) {
//             return false
//         };
//     }
//     return true;
// }

// function isUnique(string) {
//     const set = new Set();
//     for (let i = 0; i < string.length; i++) {
//         if(set.has(string[i])) {
//             return false
//         };
//         set.add(string[i])
//     }
//     return true;
// }

function isUnique(string) {
    return new Set(string).size === string.length;
}


console.log(isUnique('12443'));
console.log(isUnique('asdwerA'));
console.log(isUnique('123werrA'));