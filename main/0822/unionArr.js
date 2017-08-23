/**
 * 计算两个数组的交数组
 注意：理解题意（不是找出在两数组中都存在的元素）
 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 * @param arr1
 * @param arr2
 */

function unionArr(arr1, arr2) {
    let result = [];
    let [i, j] = [0, 0];

    arr1 = arr1.sort();
    arr2 = arr2.sort();
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            j++;
        }
        else {
            result.push(arr1[i]);
            i++;
            j++
        }
    }

    return result;
}

module.exports = unionArr;