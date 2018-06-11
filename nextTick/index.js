function foo(){
	console.log("foo");
}
process.nextTick(foo);
setTimeout(function(){
	console.log("bar");
},200);



var fs=require('fs');
var finish=function(){
	console.log("文件读取完毕！");
}
process.nextTick(finish);
console.log(fs.readFileSync('../stdin/app.js').toString());