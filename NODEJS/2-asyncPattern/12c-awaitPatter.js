
// const { readFile, writeFile } = require("fs");
const { readFile, writeFile } = require("fs").promises;


// // 1st - read file by async call back, multiple request causes overload 
// readFile("./one.txt", "utf8", (err,data)=>{
//     if(err){
//         return
//     }else{
//         console.log(data);
//     }
// })


// // 2nd - read file by promise
// const getText1 = (pathUrl) =>{
//     return new Promise((resolve, reject) => {
//         readFile(pathUrl, "utf8", (err,result)=>{
//             if(err){reject(err)}else{resolve(result);}
//         })
//     })
// }
// getText1('./one.txt').then((result)=> console.log(result)).catch((err) => console.log(err))




// //3rd - async await
// const getText2 = async() =>{
//     try {
//         const oneTxt = await getText1('./one.txt')
//         const twoTxt = await getText1('./two.txt')
//         console.log(`${oneTxt},${twoTxt}`);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getText2()




//4th - async await using util
const util = require('util'); const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const getText3 = async() =>{
    try {
        const oneTxt = await readFilePromise('./one.txt','utf8')
        const twoTxt = await readFilePromise('./two.txt','utf8')
        console.log(`${oneTxt},${twoTxt}`);

        await writeFilePromise('./12.txt',
        `This is aweasome : ${oneTxt}, ${twoTxt}`, {flag : 'a'});
    } catch (error) {
        console.log(error);
    }
}
getText3()



// 5th - (short syntax) async await using util  

// const util = require('util'); 
// const readFilePromise = util.promisify(readFile);const writeFilePromise = util.promisify(writeFile) --> This whole thing can be canverted into : const { readFile, writeFile } = require("fs").promises;

const getText4 = async() =>{
    try {
        const oneTxt = await readFile('./one.txt','utf8')
        const twoTxt = await readFile('./two.txt','utf8')
        console.log(`${oneTxt},${twoTxt}`);

        await writeFile('./12.txt',
        `This is aweasome : ${oneTxt}, ${twoTxt}`, {flag : 'a'});
    } catch (error) {
        console.log(error);
    }
}
getText4()


