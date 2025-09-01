import React, { useState } from "react";
import Component from "./Component.js"

function App(props) {
    return( 
        <div>
        <h1>** React Concepts **</h1>
        <h2>Props : {props.name}</h2><hr></hr>
         { <Component />}
        
        </div>
    )
}

export default App;