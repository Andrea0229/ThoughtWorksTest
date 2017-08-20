
const getOnlyOne = require("../../main/0810/getOnlyOne");

describe("Jasmine Test", function () {
    it("getOnlyOne Test", function () {
        let arr = [1,1,2,2,3,4,4,7,8,9,9,8,7,10,10,90,89,78,67,78,89,90,67];
        let result = getOnlyOne(arr);
        let expect_arr = 3;

        expect(result).toBe(expect_arr);
    })
});