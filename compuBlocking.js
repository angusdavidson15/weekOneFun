var childProcess = require('child_process'); //node module 
console.log("Start the process now");
//require('./fibonacci.js');
var newProcess = childProcess.spawn('node',['fibonacci.js'],{
    stdio: 'inherit'
}); //starts new process
console.log('Process Ended');
