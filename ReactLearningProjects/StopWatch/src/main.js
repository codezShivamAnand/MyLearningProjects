import React, {useState, useRef} from "react";
import ReactDOM from "react-dom/client";
import Start from "./utils/Start";
import Stop from "./utils/Stop";
import Reset from "./utils/Reset";

function StopWatch(){
    const [time,settime] = useState(0);
    const intervalRef = useRef(null); // memoizes reference of setInterval fxn 
    // console.log(intervalRef); // returns an obj, {current: null}

    return(
        <>
            <h1>Timer : {time}</h1>
            <button onClick={()=>Start({settime, intervalRef})}>Start</button>
            <br></br>
            <br></br>
            <button onClick={()=>Stop({intervalRef})}>Stop</button>
            <br></br>
            <br></br>
            <button onClick={()=>Reset({settime, intervalRef})}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch/>);