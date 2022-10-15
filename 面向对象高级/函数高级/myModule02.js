(function(w){
    // 私有的数据
    var myName="zengzhihui";
    // 操作数据的函数
    function doSomething(){
        console.log("doSomething()"+myName.toUpperCase());
    }
    function doOtherthing(){
        console.log("doOtherthing()"+myName.toLowerCase());
    }

    //通过匿名函数自调用的方式，将内部函数封装到对象当中，将对象添加为window的属性,变成全局变量的属性
    w.myModule02={
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})(window);//代码压缩