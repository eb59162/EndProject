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

export default funcCounter