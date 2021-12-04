/*--------------------------Normal Todo list---------------------*/
/*import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([])

  const Click = () => {
    setItems((prevalue) => {
      return [...prevalue, inputList];
    })
    setInputList("");
  }
  const Change = (event) => {
    setInputList(event.target.value);
  }
  const Deleteitems = (id) => {
    //console.log(id);
    setItems((prevalue)=>{
return prevalue.filter((arrayElement,index)=>{
  return  index!==id
}
)
    })
};
  return (
    <>
      <div className="main_div">
        <div className="inside_box">
          <h1>ToDo List</h1>
          <input type="text" placeholder="Add the List" onChange={Change} value={inputList} />
          <button className="btn" type="button" onClick={Click} >+</button>
          
          <ol>
            {items.map((value,index) => {
           return <Todolist 
            key={index}
            id={index}
            text={value}
            onSelect={Deleteitems}/>
            })}

          </ol>
        </div>
      </div>
    </>
  )
}

export default App;*/



/*------------------------------Using Materialicons TodoListProject---------------------------------------*/


import React from "react";
import Todolist from "./Todolist";

const App=()=>{
return(
  <>
  <Todolist/>
  </>
)
}
export default App;