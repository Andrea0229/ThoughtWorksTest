/**
 * 给定编码如下，给出一个整数,返回解码方法的种数；
 例如：
 给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
 1-> 'A’
 2-> ‘B’
 …
 26-> ‘Z’
 * @param arr
 * 思路：getCount(num)
 * num=1            0<num<10
 * num=2            9<num<27
 * num=getCount(num1)+getCount(num2)
 * 其中：num1 = num去掉最高位之后的余数
 * num2 = num去掉最高两位后的余数
 */
function main(arr) {
    let result = getCount(arr);
    console.log(`${arr}有${result}种`);
    return(result);
}

function getCount(num) {
    if(num>0 && num<10){
        return 1;
    }
    else if(num>9 && num<27){
        return 2;
    }
    else{
        let [count1, count2]= [0.0];
        let length = String(num).length;
        let round1 = Math.pow(10, length-1);
        let round2 = Math.pow(10, length-2);
        let num2 = parseInt(num / (round1/10));

        count1 = getCount(num % round1);
        if(num2>0 && num2<27){
            count2 = getCount(num % round2);
        }
        return (count1+count2);
    }
}

module.exports = main;
