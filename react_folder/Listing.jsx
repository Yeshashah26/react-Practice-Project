import { useState } from "react"

function Listing(){
    const list = ["hello", 'Y', 23, 4.5, 'null',90,undefined,null];
    return (
        <div>
            <h2>Importing Listing Component to display the data of List</h2>
            ListItem: [ { list.map((key,value) => (
                     <span>
                       { key } ,
                    </span>
                ))} ]
        </div>
    );
}

export default Listing;