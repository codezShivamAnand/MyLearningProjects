import {useState, useEffect} from "react";

function Body(){
    // cards displayed 
    // info fetch and then return 

    const [profile, setProfile] =  useState([]);

// Task : Add an input field and a Search button, search number of profiles as user inputs
    const [numberOfprofiles, setnumberOfprofiles] = useState("");

    async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*10000); // fetching random profiles 

        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
        // console.log("Fetched Data:", data);
        setProfile(data);
    }
    useEffect(()=>{
        generateProfile(8);
    },[])

    return (
        <div>
            <input className="input" type= "number" placeholder="Enter num" value={numberOfprofiles} onChange={(e)=>setnumberOfprofiles(e.target.value)}></input>
            <button onClick={ ()=>generateProfile(Number(numberOfprofiles)) } >Search</button>
            
            <div className="profile">
                {
                profile.map((value)=>{
                        return (<div key={value.id} className="cards">
                            <img src={value.avatar_url}></img>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank">Profile</a>
                        </div>)
                })  
                }
            </div>
        </div>
    )
    
}

export default Body;

