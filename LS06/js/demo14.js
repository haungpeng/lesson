/**
 * Created by qile on 2017/8/14.
 */
//逻辑与、或的基本理解
console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);

console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);

console.log(2&&3);//3
console.log(2||3);//2
console.log(23&&0);//0
console.log(0&&23);//0

var a=(new Boolean(false))&&23;
console.log(a,typeof(a));