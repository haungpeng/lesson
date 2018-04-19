/**
 * Created by qile on 2017/8/14.
 */
//Part 1
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

// typeof
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Math);//和上边一样么？为什么//object
console.log(typeof JSON);//object

// Part 2
// instanceof
console.log(Object instanceof Function);//t
console.log(Object instanceof Object);//t
console.log(Boolean instanceof Function);//t
console.log(Boolean instanceof Object);//t
console.log(String instanceof Function);//t
console.log(String instanceof Object);//t
console.log(Number instanceof Function);//t
console.log(Number instanceof Object);//t
console.log(Function instanceof Function);//t
console.log(Function instanceof Object);//t
console.log(Array instanceof Function);//t
console.log(Array instanceof Object);//t
console.log(Date instanceof Function);//t
console.log(Date instanceof Object);//t
console.log(Math instanceof Function);//f
console.log(Math instanceof Object);//t
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t

console.log(new (new Function()) instanceof Function);//false


