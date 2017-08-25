/**
 * 将数组中所包含的某个元素找出，并放在数组后面
 给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].
 function XXX(arr,elem){ }
 参数：
 arr:数组
 elem:某个元素
 */

function main(arr, target) {
    let result = arr.filter(item => {
        return item !== target;
    });
    let len = arr.length - result.length;
    for (let i = 1; i <= len; i++) {
        result.push(target);
    }
  return result;

    /** 不新创建数组 */
    /*let k = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== target){          //若元素不为0，则将他往前移动i个位置
            arr[i-k] = arr[i];
        }else{
            k++;
        }
    }

    return arr;*/
}

module.exports = main;