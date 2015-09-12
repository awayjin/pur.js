require.config({
    baseUrl: './',
    urlArgs: "bust=" +  (new Date()).getTime(), // 防止缓存,开发需要
    paths: {
        //json: '../lib/require/json',
        jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
        "jasmine-html": '../bower_components/jasmine/lib/jasmine-core/jasmine-html',
        boot: '../bower_components/jasmine/lib/jasmine-core/boot',
        "core": "../src/core"
    },
    shim: {
        "core": { exports: "window.purSea"},
        'jasmine': {
            exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'window.jasmineRequire'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'window.jasmineRequire'
        }
    }
});


require(['boot'], function () {

            require(["coreSpec"], function() {
                window.onload();
                //
                //    window.addEventListener("load", function() {
                //    describe("Jasmine内置Matcher示例：", function() {
                //
                //        it("测试hide", function () {
                //            var all = document.querySelectorAll(".a");
                //            // debugger;
                //            var hide = $("h2").hide();
                //            expect(hide).toEqual(all);
                //        });
                //    });
                //}, false);


            });


});

//var specs = [
//    './UserSessionSpec'
//];
//
//require(['boot'], function () {
//    require(specs, function () {
//       window.onload();
//    });
//});


/*

 require.config({
 baseUrl: './',
 paths: {
 'text': '../lib/text/text',
 jquery: '../lib/jquery/dist/jquery.min',
 json: '../lib/require/json',
 router: '../router',
 jasmine: './lib/jasmine-2.0.3/jasmine',
 "jasmine-html": './lib/jasmine-2.0.3/jasmine-html',
 boot: './lib/jasmine-2.0.3/boot',
 underscore: '../lib/underscore/underscore',
 mustache: '../lib/mustache/mustache',
 backbone: '../lib/backbone/backbone',
 "jquery-cookie": "../lib/jquery.cookie/jquery.cookie"
 },
 shim: {
 "jquery-cookie": ["jquery"],
 'jasmine': {
 exports: 'window.jasmineRequire'
 },
 'jasmine-html': {
 deps: ['jasmine'],
 exports: 'window.jasmineRequire'
 },
 'boot': {
 deps: ['jasmine', 'jasmine-html'],
 exports: 'window.jasmineRequire'
 },
 underscore: {
 exports: '_'
 }
 }
 });

 var specs = [
 './spec/UserSessionSpec'
 ];

 require(['boot'], function () {
 require(specs, function () {
 window.onload();
 });
 });

*/