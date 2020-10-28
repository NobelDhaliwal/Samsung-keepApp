import React from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
import { useState } from "react";
const App=()=>{
  const[addItem,setAddItem]=useState([]);

    const addNote=(note)=>{
// alert("clicked")
setAddItem((preVal)=>{
return[...preVal,note];
});
// console.log(addItems);//now {title:"",content:""} these are in app.js bcoz of preVal

    };
    const onDelete=(id)=>{
setAddItem((oldVal)=>
    oldVal.filter((currVal,indx)=>{
        return indx !==id;
    })
    );
};

return(
    <>
    <Header/>
    <CreateNote passNote={addNote}/>
{addItem.map((val,index)=>{
    return(
        <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
    );
})}
<Footer/>
    
    </>
);
};
export default App;
