/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


console.log(typeof Function);//function   内置对象
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());// function or object   new Function()构造函数实例化对象
console.log(typeof new Array());	 // function or object
console.log(typeof new Date());	 // function or object

//补充思考：
console.log(Function instanceof Function);//true
console.log(Array instanceof Function);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Array instanceof Object);//true
console.log(Function instanceof Object);//true
console.log(Math instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

typeof new new new Function();//报错
typeof new new Function();//object