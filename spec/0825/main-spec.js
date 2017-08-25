
const main = require("../../main/0825/main");

describe("",function () {
    it("",function () {
        let arr =  [0, 1, 0, 3, 12];
        let target = 0;
        let expect_arr = [1,3,12,0,0];
        expect(expect_arr).toEqual(main(arr,target));
    })


})