/*--------------------------Normal Todo list---------------------*/
/*import React from "react";

const Todolist = (props) => {
    
    return (
        <>
            <div>
            <button type="button" className="delete-btn"
                    onClick={()=>{
                        props.onSelect(props.id)
                    }}>X</button>
            <li>{props.text}</li>
        </div>
    </>
)
};

export default Todolist;*/



/*------------------------------Using Materialicons TodoListProject---------------------------------------*/

import React, { useState } from "react";
import List from "./List";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const Todolist=()=>{
    const[item,setItem]=useState("");
    const[Item,newItem]=useState([]);
const addlist=()=>{
    newItem((prevalue)=>{
        return [...prevalue,item]
    })
    setItem(" ");

}
    const Change=(event)=>{
setItem(event.target.value);
    }
return(
    <>
    <div className="main_div">
        <div className="inside_box">
            <h1>TodoList</h1>
            <br/>
            <input type="text" placeholder="Add items" onChange={Change} value={item}/>
            <Button id="btnadd" onClick={addlist}><AddIcon/></Button>
            
            <div>
                <ol>
                  { Item.map((value,index)=>{
                       return <List text={value}/>
                   })}
                </ol>
                </div>
           
        </div>
    </div>
    </>
)
}

export default Todolist;