const valueReducer = (state = 'World', action) => {
    if(action.type=='Change'){
        state= 'Taj';
    }
    else{
        state= 'World';
    }
    return state;
};
export default valueReducer;