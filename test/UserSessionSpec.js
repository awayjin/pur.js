/**
 * Created by jinwei on 2015/8/6.
 */


define([
    'core',
], function($) {
    'use strict';
    //describe("pur.js core", function() {
    //    it("jinwei", function() {
    //        //expect($(".aa")).toBe(".aa");
    //        expect($(".aa")).toBe($(".aa"));
    //
    //    });
    //});


    it("测试hide" , function() {
        var all = document.querySelectorAll(".a");

        // debugger;

        var hide = $("h2").hide();
        expect(hide).toEqual(all);
    });


    describe("Jasmine内置Matcher示例：", function() {

        it("toBe Matcher用来执行 === 对比", function() {
            var a = 12;
            var b = a;

            expect(a).toBe(b);
            expect(a).not.toBe(null);
        });

        describe("toEqual判断两个对象是否相等：", function() {

            it("对比简单的值类型的变量", function() {
                var a = 12;
                expect(a).toEqual(12);
            });

            it("对比对象", function() {
                var foo = {
                    a: 12,
                    b: 34
                };
                var bar = {
                    a: 12,
                    b: 34
                };
                expect(foo).toEqual(bar);
            });
        });

        it("toMatch用来进行正则匹配", function() {
            var message = "foo bar baz";

            expect(message).toMatch(/bar/);
            expect(message).toMatch("bar");
            expect(message).not.toMatch(/quux/);
        });

        it("toBeDefined判断是否非undefined", function() {
            var a = {
                foo: "foo"
            };

            expect(a.foo).toBeDefined();
            expect(a.bar).not.toBeDefined();
        });

        it("toBeUndefined判断是否是undefined", function() {
            var a = {
                foo: "foo"
            };

            expect(a.foo).not.toBeUndefined();
            expect(a.bar).toBeUndefined();
        });

        it("toBeNull用来判断是否为null", function() {
            var a = null;
            var foo = "foo";

            expect(null).toBeNull();
            expect(a).toBeNull();
            expect(foo).not.toBeNull();
        });

        it("toBeTruthy执行布尔测试，判断值是否是，或者可以转换为true", function() {
            var a, foo = "foo";

            expect(foo).toBeTruthy();
            expect(a).not.toBeTruthy();
        });

        it("toBeFalsy和toBeTruthy相反", function() {
            var a, foo = "foo";

            expect(a).toBeFalsy();
            expect(foo).not.toBeFalsy();
        });

        it("toContain判断一个数组是否包含某个值", function() {
            var a = ["foo", "bar", "baz"];

            expect(a).toContain("bar");
            expect(a).not.toContain("quux");
        });

        it("toBeLessThan执行数字大小比较", function() {
            var pi = 3.1415926,
                e = 2.78;

            expect(e).toBeLessThan(pi);
            expect(pi).not.toBeLessThan(e);
        });

        it("toBeGreaterThan和toBeLessThan相反", function() {
            var pi = 3.1415926,
                e = 2.78;

            expect(pi).toBeGreaterThan(e);
            expect(e).not.toBeGreaterThan(pi);
        });

        it("toBeCloseTo示例", function() {
            var pi = 3.1415926,
                e = 2.78;

            expect(pi).not.toBeCloseTo(e, 2);
            expect(pi).toBeCloseTo(e, 0);
        });

        it("toThrow判断一个函数是否有抛出异常", function() {
            var foo = function() {
                return 1 + 2;
            };
            var bar = function() {
                return a + 1;
            };

            expect(foo).not.toThrow();
            expect(bar).toThrow();
        });
    });




});