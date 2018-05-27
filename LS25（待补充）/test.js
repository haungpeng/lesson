window.onload=function (e){
    // console.log("window onload");
    // console.log(e.target);
    // console.log(this);
    function clickHandler(e){
        console.log(e.target);
    }
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    div1.onclick=clickHandler;
    div2.onclick=clickHandler;
    // div1.onclick=function(e){
    //     // console.log(e.clientX,e.clientY,e.ctrlKey);
    //     // console.log(e);
    //     // console.log(e.type,e.target);
    //     // console.log(e.target,this);
    //     // console.log(e);
    //     // console.log(e.hasOwnProperty("target"));
    //     // console.log(e.__proto__);
    //     // console.log(e.__proto__.__proto__);
    //     // console.log(e.__proto__.__proto__.__proto__);
    //     // console.log(e.__proto__.__proto__.__proto__.__proto__);

    // }
    // div1.ondrag=function(){
    //     console.log("div1 ondrag");
}
        function div2click(){
            console.log("xxx");
        }