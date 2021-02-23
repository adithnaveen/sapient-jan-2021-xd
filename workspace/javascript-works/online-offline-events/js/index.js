(function(){
    let status1 = document.getElementById("span-1")
    let status2 = document.getElementById("span-2")

    if(navigator.onLine) {
        console.log("I'm online");
        status1.innerHTML ="At the time of page load, the browser was connected to internet"
    }else {
        status1.innerHTML ="At the time of page load, the browser was not connected to internet/offline"
        console.log("i'm offline ");
    }

    (function showCusomtContent() {
       
        status2.innerHTML = "Message which I've"; 
        status2.className = navigator.onLine ? "online" :"offline"; 
    })()

    // window.addEventListener('online', function ()  {
    //     console.log("---- i'm online ");
    //     showCusomtContent()
    // })
    // window.addEventListener('offline', function () {
    //     console.log("-----'m offline  ");
    //     showCusomtContent() 
    // })


})()
 