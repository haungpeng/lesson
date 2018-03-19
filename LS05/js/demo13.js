/**
 * Created by qile on 2017/8/14.
 */

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
console.log(3===3);//true
console.log(3==="3");//false
console.log(3=="3");//true
console.log(3==new String(3));//true
console.log(3===new String(3));//true

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1 == obj2);//false
console.log(obj1 === obj2);//false
console.log(obj1 == new String("xyz"));//false

var obj1 = new String("xyz");
var obj2 = obj1;
console.log("xyz"===obj1);//false
console.log(obj1 == obj2);//true
console.log(obj1 === obj2);//true  空间分配相同
console.log(obj1 == new String("xyz"));//false

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//false
console.log(obj1 !== obj2);//true
console.log(obj1 != obj2);//true
console.log(obj1 != new String("xyz"));//true

//注意 是引用类型转换到基本类型了？还是基本类型转换到引用类型了？
console.log(2 == 2);//true
console.log(new Number(2) == new Number(2));//false
console.log(2 == new Number(2));//true

//3===3
//true
//NaN===NaN
//false
//{}==={}
//false

var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);//true
console.log(obj1.y===obj2.y);//false
console.log(obj1.z===obj2.z);//false
console.log(obj1.x==obj2.x);//true
console.log(obj1.y==obj2.y);//false
console.log(obj1.z==obj2.z);//false

