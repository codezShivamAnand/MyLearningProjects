export default function Start({settime, intervalRef}){
    intervalRef.current = setInterval(() => {
        settime(latest=>latest+1);
    }, 1000);
}