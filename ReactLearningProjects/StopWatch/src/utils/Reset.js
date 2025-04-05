function Reset({settime, intervalRef}){
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    settime(0);
}
export default Reset;
