/*
 * 疑问：
 *  1. e.stopPropagation() 调用时不用写兼容性
 *
 *
 * */

!function(global, factory) {
    factory(global)
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    "use strict";

    /**
     * js基础库
     * @param {object} selector
     *
     */

    // jQuery选择器
    //var doc = window.document;

    var $ = window.purSea = function (selector) {

        return new $.fn.init(selector);
    };

    window.$ = window.purSea;


    purSea.fn = purSea.prototype = {
        init: function (selector) {

            // 处理 $(""), $(null), $(false), $(undefined)
            if (!selector) {
                return false;
            }

            // 处理HTML字符串
            if (typeof selector === "string") {
                var
                    selectors,
                    i;

                selectors = document.querySelectorAll(selector);

                if (selectors.length >= 1) {
                    for (i = 0; i < selectors.length; i++) {
                        this[i] = selectors[i];
                    }
                } else {
                    return [];
                }



                return this;

            }

            this[0] = selector;
            return this;
        },

        show: function () {
            this.css("display", "block");
            return this;
        },

        hide: function () {
            this.css("display", "none");
            return this;
        },

        /**
         * css方法
         * @param {string} property - css样式属性名
         * @param {string | number} value - css样式属性值
         *
         */
        css: function (name, value) {

            debugger;
            // 多功能函数，读取或设置集合的属性值；值为函数时会被执行
            // fn：jQuery.fn.css, jQuery.fn.attr, jQuery.fn.prop
           /* var access = purSea.access = function(elems, fn, key, value, chainable) {
                var i = 0,
                    len = elems.length;

                return fn(elems[0], key);
            };



            return access(this, function(elem, name, vluae){

                return purSea.css(name)
            }, name, value, arguments.length > 1);*/


            //var
            //    camel,
            //    i,
            //    j;
            //
            //if (arguments.length < 2) {
            //    console.log("111:" + arguments, property);
            //    if (typeof property === "string") {
            //        var ele = this[0];
            //        //debugger;
            //        return window.getComputedStyle(ele).getPropertyValue(property);
            //    } else {
            //        // 多个选择器 多个CSS
            //        for (i in property) {
            //            camel = $.camelCase(i);
            //            for (j in this) {
            //                if ((typeof this[j]) !== "function") {
            //                    this[j].style[camel] = property[i];
            //                }
            //            }
            //        }
            //    }
            //
            //} else {
            //    // console.log(arguments);
            //    if (typeof property === "string") {
            //        console.log("222:" + arguments, property, this);
            //        //debugger;
            //        for (i in this) {
            //            if ((typeof this[i]) !== "function") {
            //                this[i].style[property] = value;
            //            }
            //        }
            //
            //    } else if (property instanceof Object) {
            //
            //        // 多个选择器 多个CSS
            //        for (i in property) {
            //            camel = $.camelCase(i);
            //            for (j in this) {
            //                if ((typeof this[j]) !== "function") {
            //                    this[j].style[camel] = property[i];
            //                }
            //            }
            //        }
            //    }
            //    return this;
            //
            //}



        },

        html: function (content) {
            if (content !== "") {
                this[0].innerHTML = content;
            } else {
                this[0].innerHTML = content;
            }
            return this;
        },


        // 删除当前节点
        remove: function () {
            var ele = this[0];
            ele.parentNode && ele.parentNode.removeChild(ele);
            return this;
        }
    };

    // Give the init function the $ prototype for later instantiation
    // 在 $.prototype.init 实例化后, 把 $.prototype赋值给init函数的原型
    purSea.fn.init.prototype = purSea.fn;


    purSea.extend = purSea.fn.extend = function() {
        var
            target = arguments[0],
            length = arguments.length;

        //debugger;

        // 只有一个参数且是对象字面量{}
        if (length === 1) {
            target = this;
        }

        console.log(arguments[0] +", 2:" + this);
        var name,
            options = arguments[0];
        for (name in options) {

            // debugger;
            target[name] = options[name];
        }

        return target;
    };

    // 转换为驼峰形式
    purSea.camelCase = function (string) {
        // debugger;
        var
            msPrefix = /-ms-/ig,
            dashAlpha = /-([\da-z])/ig,
            fcamelCase = function (match, letter) {
                // 返回dashAlpha ()里的内容
                return letter.toUpperCase();
            }
        // IE是msTransform 标准是WebkitTransform
        return string.replace(msPrefix, "ms-").replace(dashAlpha, fcamelCase);

    };

    // 检查页面是否有重复id
    function isRepeatId() {
        var eles = document.getElementsByTagName("*");
        var arr = []; // 重复id数组
        var obj = {};
        var id = ''; // 重复id

        for (var i = 0; i < eles.length; i++) {
            id = eles[i].id;
            if (id) {
                // arr.push(id);
                if (obj[id]) {
                    console.log("重复id:", id, ", 第一个元素位置:" + obj[id], ", 重复元素位置:" + i);
                    arr.push(id);
                } else {
                    obj[id] = i;
                }
            }

        }

        console.log(arr);

    }

    // 数组去重
    function isRepeatArray() {

        var arr = [];
        var obj2 = {};
        var arr2 = ["a", 232, 22, "a", 11, 22, "a", "sdfsd", "d", 11, "d"];

        for (var i = 0; i < arr2.length; i++) {
            if (!obj2[arr2[i]]) {
                arr.push(arr2[i]);
                obj2[arr2[i]] = true;
            }
        }
        return arr;
    }

    // 基本类型检测
    purSea.type = function (obj) {
        var class2type = {}, // 存放各类型的 [object NativeConstructorName]
            toString = class2type.toString,
        // 可检测是否布尔值 数值 字符串 函数 数组 日期 正则 对象字面量 错误类型
            objType = "Boolean Number String Function Array Date RegExp Object Error Symbol",
            arr = objType.split(" "), // 把objType变成数组
            i; // arr数组的下标

        for (i in arr) {
            class2type["[object" + " " + arr[i] + "]"] = arr[i].toLowerCase();
        }

        // 这为了检测null,因为typeof null是object
        if (obj == null) {
            return obj + ""; // 这里必须要加一个"",才能返回字符
        }

        return typeof obj === "function" || typeof obj === "object" ?
            class2type[ toString.call(obj) ] :
            typeof obj;
    };


    purSea.css = function(elem, name, extra) {
        // debugger;
        var
            origName = purSea.camelCase(name),
            hooks,
            val;

        // Try prefixed name followed by the unprefixed name
        hooks = purSea.cssHooks[ name ] || purSea.cssHooks[ origName ];

        // If a hook was provided get the computed value from there
        if ( hooks && "get" in hooks ) {
            val = hooks.get( elem, true, extra );
        }

        purSea.cssHooks[ name ] = {
            get: function( elem, computed, extra ) {
                if ( computed ) {

                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return getWidthOrHeight( elem, name, extra );
                }
            }
        };

        function getWidthOrHeight( elem, name, extra ) {
            var val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
            return ( val +
                augmentWidthOrHeight(
                    elem,
                    name,
                    extra || ( isBorderBox ? "border" : "content" ),
                    valueIsBorderBox,
                    styles
                )
                ) + "px";
        }

        function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
            var i = extra === ( isBorderBox ? "border" : "content" ) ?
                    // If we already have the right measurement, avoid augmentation
                    4 :
                    // Otherwise initialize for horizontal or vertical properties
                    name === "width" ? 1 : 0,

                val = 0;

            for ( ; i < 4; i += 2 ) {
                // Both box models exclude margin, so add it if we want it
                if ( extra === "margin" ) {
                    val += purSea.css( elem, extra + cssExpand[ i ], true, styles );
                }

                if ( isBorderBox ) {
                    // border-box includes padding, so remove it if we want content
                    if ( extra === "content" ) {
                        val -= purSea.css( elem, "padding" + cssExpand[ i ], true, styles );
                    }

                    // At this point, extra isn't border nor margin, so remove border
                    if ( extra !== "margin" ) {
                        val -= purSea.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                    }
                } else {
                    // At this point, extra isn't content, so add padding
                    val += purSea.css( elem, "padding" + cssExpand[ i ], true, styles );

                    // At this point, extra isn't content nor padding, so add border
                    if ( extra !== "padding" ) {
                        val += purSea.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                    }
                }
            }

            return val;
        }

        return val;
    };

    return window.purSea;

});


//define(function (require) {
//
//});
//
