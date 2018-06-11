function foo(){
	console.log("foo");
}
process.nextTick(foo);
setTimeout(function(){
	console.log("bar");
},200);