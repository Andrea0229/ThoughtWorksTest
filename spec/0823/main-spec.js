const changeToArr = require("../../main/0823/changeToArr");

describe("N维数组转化为一维数组", function () {
    it("二维转化为以为", function () {
        let arr = [[1,2],[4,5]];
        let expect_arr = [1,2,4,5];

        expect(expect_arr).toEqual(changeToArr(arr));
    })

    it("二维数组转换为一维数组:[1,2,[1,2],[3,4]]", function () {
        let arr = [1,2,[1,2],[3,4]];
        let expect_arr = [1,2,1,2,3,4];

        expect(expect_arr).toEqual(changeToArr(arr));
    })
    it("多维数组转换为一维数组:[[[4]],[3,[2,[1]]]]", function () {
        let arr = [[[4]],[3,[2,[1]]]];
        let expect_arr = [4,3,2,1];

        expect(expect_arr).toEqual(changeToArr(arr));
    })
    it("多维数组转换为一维数组:[4,[3,[2,[1]]]]", function () {
        let arr = [4,[3,[2,[1]]]];
        let expect_arr = [4,3,2,1];

        expect(expect_arr).toEqual(changeToArr(arr));
    })
})