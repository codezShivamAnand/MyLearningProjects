import React, {useState, useRef} from "react";
import ReactDOM from "react-dom/client";

function StopWatch(){
    const [time,settime] = useState(0);
    const intervalRef = useRef(null); // memoizes reference of setInterval fxn 
    console.log(intervalRef); // returns an obj, {current: null}


    function start(){
        intervalRef.current = setInterval(() => {
            settime(latest=>latest+1);
        }, 1000);
    }
    function stop(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        settime(0);
    }
    return(
        <>
            <h1>Timer : {time}</h1>
            <button onClick={()=>start()}>Start</button>
            <br></br>
            <br></br>
            <button onClick={stop}>Stop</button>
            <br></br>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch/>);