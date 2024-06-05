import React,{useReducer} from 'react'

const EmpReducer=()=>{
    const initialState={
        name:'',
        age:0,
        phone:''
    }

const updateEmp = (state,action) =>{
    debugger
switch (action.type) {
    case "Add":
       return {
        ...state,
        [action.myChange.key]:action.myChange.val,
        age: Date.now(),
       }
        break;

    default:
        break;
}
}

const handleChange = (key,val)=>{
    dispatch({type:"update",myChange:{key,val}})
}
    const [emp, dispatch] =useReducer(updateEmp,initialState)
    return(
        <>
        <input onChange={(e)=>handleChange("name",e.target.value)}/>
        <input onChange={(e)=>handleChange("age",e.target.value)}/>
        <input onChange={(e)=>handleChange("phone",e.target.value)}/>
        </>
    )
}

export default EmpReducer