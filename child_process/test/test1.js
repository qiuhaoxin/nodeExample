process.stdout.write('子进程当前工作目录是：'+process.cwd());
process.argv.forEach(function(val,index,array){
   process.stdout.write('\r\n'+index+':'+val);
});

process.on('error',function(err){
     console.log("error in child process 1 is "+err);
})