
const left_pad = require("../../main/0824/left-pad");

describe("",function () {
    it("",function () {
        let [str, count, ch] = ["hello", 20, "1"];
        let expect_str = "111111111111111hello";
        let result = left_pad(str, count, ch);

        expect(expect_str).toEqual(result);
    })
})