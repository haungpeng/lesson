/**
 * Created by qile on 2017/8/14.
 */
/*
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();
foo();
*/

// 例一
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1
/*
// 例二
var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}
checkScope()();//输出什么
*/
//查看JavaScript权威指南（第6版）184页中的描述

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());//输出1
console.log(f3());//输出2

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少6
console.log(inc(2));//输出多少8
inc = createInc(5);
console.log(inc(1));//输出多少6

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少6
console.log(inc(2));//输出多少8
var inc2 = createInc(5);
console.log(inc(1));//输出多少9
console.log(inc2(1));//输出多少6

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//输出多少1
a();//输出多少2
b();//输出多少1
