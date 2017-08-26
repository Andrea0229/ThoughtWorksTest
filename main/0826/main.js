/**
 * 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
 如果这个数被3整除，打印fizz.
 如果这个数被5整除，打印buzz.
 如果这个数能同时被3和5整除，打印fizz buzz.
 */

main(20);

function main(num){
    let result = "";
    for(let i=1; i<=num; i++){
        (i % 15 === 0) ? result+=`fizz buzz ` :
            (i % 5 === 0) ? result += `buzz ` :
                (i %3 === 0) ? result += `fizz ` : result;
    }
    return result;
}

module.exports = main;