/**
 判断一个字符串中出现次数最多的字符，并统计次数
 例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
 例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 **/
// let str = "abcsbaddbizdbas";
// let result = getMaxCount(str);
function getMaxCount(str) {
    let result = {};
    let temp = [];
    let max = 1;

    for (let i = 0; i < str.length; i++) {
        if (temp.indexOf(str[i]) < 0) {
            temp.push(str[i]);
            result[str[i]] = 1;
        }
        else {
            result[str[i]] += 1;
            if (result[str[i]] > max) {
                max = result[str[i]];
            }
        }
    }
    return getMaxStr(result, max);
}

function getMaxStr(result, max) {
    let maxResult = {};
    for (let key in result) {
        if (result[key] === max) {
            maxResult[key] = result[key]
        }
    }
    return maxResult;
}

module.exports = getMaxCount;