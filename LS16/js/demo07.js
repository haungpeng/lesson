/**
 * Created by qile on 2017/8/14.
 */
//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);


var superObj={
	show:function(){console.log(this.x,this.y)}//this指向调用此函数的主体
}
var first=Object.create(superObj);
first.x=1;
first.y=2;
first.show();

var superObj={
    x:3,
    y:4,
	show:function(){console.log(this.x,this.y)}//this指向调用此函数的主体
}
var first=Object.create(superObj);
first.x=1;
first.y=2;
first.show();
