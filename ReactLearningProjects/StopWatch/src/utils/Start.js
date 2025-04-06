export default function Start({settime, intervalRef}){
    if(intervalRef.current == null ){ // makes sure not to stack multiple timers
        // console.log("interval Started"); 
        intervalRef.current = setInterval(() => {
            settime(latest=>latest+1);
        }, 1000);
    }

}