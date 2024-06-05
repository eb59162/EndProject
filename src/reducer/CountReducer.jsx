import React,{useReducer} from 'react'

const CountReducer =()=>{


//3
const funcCounter =(state,action)=>{
    debugger
switch (action.type) {
    case "add":
       return state+action.cnt
       case "sub":
        return state-action.cnt
    default:
        break;
}
}

//1--useReducerבהתחלה מגדירים את ה
///count - המשתנה
///dispatch - פונקציה
///funcCounter - פונקציה שאנחנו יוצרות
///0 - ערך התחלתי
    const [count,dispatch] = useReducer(funcCounter,0)

//2--כשנרצה לשנות את הSTATE נלחץ על הכפתור ולא נשנה ישירות את הסטייט
// dispatch אלא נקרא לפונקציה 
//הפונקציה הזאת מכינה אוביקט
//ישר אחרי שהגענו לdispatch אנחנו נגיע לfuncCounter 
//ולא נצטרך לקרא לה.

    const handleAdd = ()=>{
        dispatch({type:"add",cnt:1})
    }

    const handleSub = ()=>{
        dispatch({type:"sub",cnt:1})
    }

    return(
        <>
        <p>{count}</p>
        <button onClick={()=>handleSub()}>
            -
        </button>
        <button onClick={()=>handleAdd()}>
            +
        </button>
        </>
    )
}

export default CountReducer