function myModule(){
    // 私有的数据
    var myName="zengzhihui";
    // 操作数据的函数
    function doSomething(){
        console.log("doSomething()"+myName.toUpperCase());
    }
    function doOtherthing(){
        console.log("doOtherthing()"+myName.toLowerCase());
    }

    // return doSomething 需要doSomething则释放
    // return doOtherthing 需要doOtherthing则释放

    // 向外暴露对象(给外部使用的方法)
    return{
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
        }