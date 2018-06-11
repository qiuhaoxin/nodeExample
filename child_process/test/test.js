process.stdout.write('子进程当前工作目录是：'+process.cwd());
process.arg.forEach(function(val,index,array){
   process.stdout.write('\r\n'+index+':'+val);
});
