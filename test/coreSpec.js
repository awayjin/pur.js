/**
 * Created by jinwei on 2015/8/6.
 */


define([
    'core',
], function($) {
    'use strict';



    //$("html").css("height");
   //
   // $.jin = function() {
   //     console.table("1:" + this);
   //     return "jin name";
   // };
   //console.log($.jin());





    describe("purSea.extend和pusSea.fn.extend", function() {

        // describe();

        // 测试用例 Spec
        it("用$.extend扩展purSea本身", function() {
            $.extend({
                "purSeaSelfTest": function() {
                    return "dd";
                }
            });
            expect($.purSeaSelfTest()).toBe("dd");
        });

        it("用$.fn.extend扩展purSea.prototype", function() {
            $.fn.extend({
                "fnTest": function() {
                    return "fnTest";
                }
            });
            expect($("body").fnTest()).toEqual("fnTest");
        });

        var obj1 = { a: 1, b:2};
        var obj2 = { a:1-1, c:3};
        // 浅拷贝两个参数以上
        it("purSea.extend(Object, Object)", function() {
            var obj3 = $.extend(obj1, obj2);
            expect({a: 2}).toEqual({a:2, b: 3});
        });

    });

    describe("$.css(String)", function() {
        $("html")
    });


    //$("h1").hide();
    //$("h2").hide();
    //console.log("3秒后再显示 h1 h2");
    //setTimeout(function() {
    //    $("h1").show();
    //    $("h2").show();
    //}, 3000);
    //
    //$("h1").css({
    //    height: "40",
    //    width: "120px",
    //    border: "1px solid",
    //    "font-size": "30px"
    //});
    //
    //console.log( $("h1").css("height"))


   /*

    describe("A Suite", function() {
    var foo;

    beforeEach(function() {
    foo = 0;
    foo += 1;
    });

    afterEach(function() {
    foo = 0;
    });

    it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
    });

    describe("nested inside a second describe.", function() {
    var bar;
    beforeEach(function() {
    bar=1
    });

    it("can reference both scopes as needed", function() {
    expect(foo).toEqual(bar);
    });

    it("both value compare", function() {
    // expect({}).toEqual({});
    //expect({}).not().toBe({});
    var a = {};
    // expect(1).toBe(1);
    expect({}).toEqual({});
    expect(a).not.toBe(2)


    })
    });

    });

   */





});


/**
 *
 * 每个测试都在一个测试集中运行，Suite就是一个测试集，用describe函数封装。
 * Spec表示每个测试用例，用it函数封装。通过expect函数，作为程序断言来判断相等关系。
 * setup过程用beforeEach函数封装，tearDown过程用afterEach封装。
 *
 *
 * 1. Suite表示一个测试集
 *
 * 以函数describe(string, function)封装，它包含2个参数：
     string：测试组名称，
     function：测试组函数。
 *一个Suite(describe)包含多个Specs(it)，一个Specs(it)包含多个断言（expect）。
 *
 * 2. Setup和Teardown操作
    Setup:在每个测试用例Spec执行之前做一些初始化操作，
    Teardown: 在每个Sepc执行完之后做一些清理操作，这两个函数名称来自于JUnit

    beforeEach()：在describe函数中每个Spec执行之前执行。
 afterEach()： 在describe函数中每个Spec数执行之后执行。
 beforeAll()：在describe函数中所有的Specs执行之前执行，但只执行一次，在Sepc之间并不会被执行。
 afterAll()： 在describe函数中所有的Specs执行之后执行，但只执行一次，在Sepc之间并不会被执行。

 * 3. this值
 除了在describe函数开始定义变量，用于各it函数共享数据外，还可以通过this关键字来共享数据

 *4. 嵌套Suite
 *
 *
 *
 *
 * */