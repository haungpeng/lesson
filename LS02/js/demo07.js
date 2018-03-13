/**
 * Created by qile on 2017/8/14.
 */
//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");   分隔
// str.split("_",2);
// str.concat("_opq");
// str.substr(4,7);     截取从4号下标长度为7的字符串
// str.substring(4,7);  截取从4号下标到7号下标之前的字符串
// str.slice(2);    清除前两个字符
// str.slice(2,5);  第二个字母到第五个字母的字符串
// str.slice(-2);   倒数第二个往后的字符串
// str.slice(2,-2);

// str.bold();
// str.link();
// str.fontcolor("red");
// str.fontsize(50);


//模式匹配，参加后续正则表达式章节
