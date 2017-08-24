
const left_pad = require("../../main/0824/left-pad");

describe("拼接字符串到指定长度",function () {
    it("111111111111111hello",function () {
        let [str, count, ch] = ["hello", 20, "a"];
        let expect_str = "aaaaaaaaaaaaaaahello";
        let result = left_pad(str, count, ch);

        expect(expect_str).toEqual(result);
    })

    it("插入null",function () {
        let [str, count, ch] = ["hello", 20, null];
        let expect_str = "               hello";
        let result = left_pad(str, count, ch);

        expect(expect_str).toEqual(result);
    })

    it("插入0",function () {
        let [str, count, ch] = ["hello", 20, null];
        let expect_str = "               hello";
        let result = left_pad(str, count, ch);

        expect(expect_str).toEqual(result);
    })
})