function Stop({intervalRef}){
    clearInterval(intervalRef.current);
    intervalRef.current = null;
}
export default Stop;