
const main = require("../../main/0826/main");

describe("给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：",function () {
    it("如果这个数能同时被3和5整除，打印fizz buzz.",function () {
        let num = 10;
        main(num);
        let expect_str = "fizz buzz fizz fizz buzz ";
        let result = main(num);

        expect(expect_str).toEqual(result);
    })

})