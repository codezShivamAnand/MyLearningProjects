import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"
import Body from "./component/Body"

function GitHubProfile(){
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GitHubProfile/>)