export const changeVal=function(){
    return (dispatch)=>{
        dispatch({
            type:'Change',
        })
    }
}
export const resetVal=function(){
    return (dispatch)=>{
        dispatch({
            type:'Reset',
        })
    }
}