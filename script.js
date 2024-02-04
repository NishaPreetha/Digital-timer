
function displayTime(){

    let dateTime = new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    document.getElementById('hours').innerHTML=hr
    document.getElementById('mins').innerHTML=min
    document.getElementById('sec').innerHTML=sec



}
setInterval(displayTime,500)


