import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function TODO(){

    const [values, setValues] = useState("");
    const [list, setlist] = useState([]);

    function Add(){ // add values to the list 
        if(values.trim() === "") return; // to prevent empty todo
        setlist([...list, values]);
        setValues(""); // set it to empty 
        
    }
    function remove(indexToremove){
        const filtered = list.filter((element,index )=> index != indexToremove);
        setlist(filtered);
    }

    return (
        <div className ="container">
            <div className="search">
                <input type="text" placeholder="Make ToDO" value={values} onChange={(e)=>setValues(e.target.value)} /> 
                <button onClick={Add} >ADD</button>
            </div>
            
            <ul className="list">
                {
                    list.map((item, index) => (
                        <li className="to-dolist" key={index}>
                            {item}
                            <button onClick={()=>remove(index)}>x</button>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<TODO/>);