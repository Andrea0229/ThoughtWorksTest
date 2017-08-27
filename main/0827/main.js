
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
