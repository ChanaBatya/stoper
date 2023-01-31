let seconds = 0;
let isStarted = false;
function printTime () {
    document.getElementById('masah').innerHTML=seconds;

}
// printTime();
function timeoutHandler() {
    printTime()
    setTimeout(timeoutHandler, 1000)
if (isStarted) {
    seconds = seconds+1;
}
}
setTimeout(timeoutHandler, 1000);
document.getElementById('startBut').addEventListener('click',()=>{
    isStarted = true;
    seconds = 0;
})
document.getElementById('finishBut').addEventListener('click',()=>{
    isStarted = false;
})