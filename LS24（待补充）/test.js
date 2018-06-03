window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        e.stopPropagation();
        console.log("div1 click",this);
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click",this);
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click",this);
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click",this);
    },false);
}