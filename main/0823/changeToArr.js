/**
 给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
 给定 [1,2,[1,2]]，返回 [1,2,1,2]。
 给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
 给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
 */

function changeToArr(arr) {
    let tmp = arr;
    let result = arr;
    while (tmp instanceof Array) {
        result = Array.prototype.concat.apply([], result);
        tmp = result.find(item => {
            return item instanceof Array;
        });
    }console.log(result);
    return result;
}


module.exports = changeToArr;