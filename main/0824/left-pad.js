/**
 *
 实现一个left-pad函数
 leftpad功能，就是字符串前面拼指定字符到固定长度，比如
 leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
 三个参数，
 第一个：当前字符串；
 第二个：需要返回字符串的长度
 第三个：用来拼接的字符串
 */

function left_pad(str, count, ch){
    if (!ch && ch !== 0) ch = ' ';
    let len = count - str.length + 1;
    return Array(len).join(ch) + str;

}

module.exports = left_pad;