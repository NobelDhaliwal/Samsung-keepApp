import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
const GKCreateNote=(props)=>{
   const[expand,setExpand]=useState(false);
                                   /*we are passing an object in useState 
                                  and properties  have same name of the  input
                                   and text field.now with preVal we can store 
                                   value of input and text area in this content and 
                                      title property of object in states. */
    const[note,setNote]=useState({
        title:"",
        content:"",
    });
    const inputEvent=(event)=>{
console.log(event.target.value);
console.log(event.target.name);
const{name,value}=event.target;// object destructuring
setNote((preVal)=>{
    return{
        ...preVal,
        [name]:value,    /*with preVal updated function can 
                      also acess useState object*/
    };
})                          /*spread Operator we can acess preValue Data*/
                    /*if name in preVal match with input and textfield name store 
                         value from variable value in it */
    };

    const addEvent=()=>{  //addEvent function define here 
        props.passNote(note);        //we want that by clicking button our addNote function get 
          setNote({title:"",
          content:"",});                //get call therefore pass it as props 
                                 //with props.passNote(); indirectly we are calling 
                                 //addNote function
            };
              //how to know which note to store therefore pass note as argument
                 //jab hum button pe kr rahe hai click toh khud ek function ko call
                 //kr rahe addEvent and therfore passNote attribute pass in addEvent function
    const expandIt=()=>{
       setExpand(true);
    }
    const bcktonormal=()=>{
        setExpand(false);
    };
return(
    <>
    <div className="main_notediv"  onDoubleClick={bcktonormal}>
        <form>
            {expand?(
            <input 
            type="text"
            placeholder="Title"
            onChange={inputEvent}
            name="title"
            value={note.title}
            autoComplete="off"
            /> ):null}
            <br/>
            <textarea 
            placeholder="Write a Note"
            name="content"
            value={note.content}
            rows=""
            coloum="1"
            onChange={inputEvent}
            onClick={expandIt}
           
            />
            <br/>
            {expand?(
            <Button onClick={addEvent} >
                 {/* we want by clicking button what user types we add in empty array
                  but our contents is in google app therefore we have to define function 
                  in app component */}
                <AddIcon className="plus_sign"/>
                </Button>
             ) :null}

</form>

    </div>
    </>
)
};
export default GKCreateNote;