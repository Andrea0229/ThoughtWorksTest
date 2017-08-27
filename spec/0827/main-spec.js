
const main = require("../../main/0827/main");

describe("组合种类",function () {
    it("1221",function () {
        let num = 1221;
        main(num);
        let expect_count = 5;
        let result = main(num);

        expect(expect_count).toEqual(result);
    })
    it("12212",function () {
        let num = 12212;
        main(num);
        let expect_count = 8;
        let result = main(num);

        expect(expect_count).toEqual(result);
    })
    it("120102",function () {
        let num = 12212;
        main(num);
        let expect_count = 8;
        let result = main(num);

        expect(expect_count).toEqual(result);
    })


})