import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const List = (props) => {
    const [line, setLine] = useState(false);
    const cut = () => {
        setLine(true);

    }
    return (
        <>
            <div >
                <button id="delete" onClick={cut}><DeleteIcon id="delete" /></button>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
           </div> 
        </>
    )
}
export default List;