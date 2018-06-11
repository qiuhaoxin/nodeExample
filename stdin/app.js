process.stdin.resume();
process.stdin.on('data',function(chunk){
	console.log("you result is "+chunk);
	process.stdout.write("进程收到的数据是:"+chunk);
})