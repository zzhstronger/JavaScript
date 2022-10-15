function fibonacci(number) {
    return number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(this);//this指向DedicatedWorkerGlobalScope新的全局对象
var onmessage=function(event){
var number=event.data;//接受主线程的消息
console.log("分线程接受到主线程发送的数据:"+number);
//计算
var result=fibonacci(number);
postMessage(result);//分线程向主线程返回数据
console.log("分线程向主线程返回数据:"+result);//console.log()是打印函数，不是UI
}
// 分线程中不能更新界面,因为分线程看不到window不能访问window上的对象
//分线程中的全局对象已经不再是window,所以在分线程中不可能更新界面