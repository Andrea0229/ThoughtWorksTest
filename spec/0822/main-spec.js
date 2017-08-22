
const unionArr = require("../../main/0822/unionArr");

describe("两个数组的交集", function () {
    it("[1,2,2,1] & [2,2] 交集",function () {
        let [arr1, arr2] = [[1,2,2,1], [2,2]];
        let result = [];
        let expect_arr = [2,2];
        result = unionArr(arr1, arr2);

        expect(expect_arr).toEqual(result);
    })
    
    it("['s','e','t','e','y','q','s','a'] & ['a', 'g', 't', 's', 'e']", function () {
        let [arr1, arr2] = [['s','e','t','e','y','q','s','a'], ['a', 'e', 't', 's', 'e']];
        let result = [];
        let expect_arr = [ 'a', 'e', 'e', 's', 't' ];

        result = unionArr(arr1, arr2);

        expect(expect_arr).toEqual(result);
    })
})