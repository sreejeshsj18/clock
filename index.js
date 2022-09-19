let Hours=document.getElementById('hours')
let Minutes=document.getElementById('minutes')
let Seconds=document.getElementById('seconds')
let AMPM=document.getElementById('am')


 
 
function updateClock(){
    let curTime=new Date()
    Hours.innerHTML =curTime.getHours()
    if(Hours.innerHTML < 10){
        Hours.innerHTML="0"+curTime.getHours()
    }
    Minutes.innerHTML=curTime.getMinutes()
    Seconds.innerHTML=curTime.getSeconds()
    if(Hours.innerHTML> 12){
        AMPM.innerHTML="PM"
    }else{
      AMPM.innerHTML='AM'
    }
   setTimeout((time)=>{
        updateClock()
    },1000)

}
updateClock()
 
