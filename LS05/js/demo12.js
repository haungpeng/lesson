/**
 * Created by qile on 2017/8/14.
 */
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

//
var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11

//思考：+=转化为字符串类型还是数字类型

var x = "1";
console.log(x+=1);//11