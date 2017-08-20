const getMaxCount = require("../../main/0820/getMaxCount");

describe("判断一个字符串中出现次数最多的字符", function () {
    it("str = ‘abcsbaddbizdbas’,输出：{b：4}",function () {
        let str = 'abcsbaddbizdbas';
        let result = getMaxCount(str);
        let expect_str = {b:4};

        // expect(result).toBe(expect_str);     //这个是错误的
        expect(result).toEqual(expect_str);
    });

    it("str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}",function () {
        let str = 'aaaaabbdbdbb';
        let result = getMaxCount(str);
        let expect_str = {a:5,b:5};

        expect(result).toEqual(expect_str);
    })
});