export default ({dispatch}) => next =>  action => {
      //Check to see if the action
    // has a primise on its 'payload' property
    // if it does, then wait for it to resolve
    // if it doens't then send the action on to the 
    //next middleware
    debugger
    if(!action.payload || !action.payload.then){
        return next(action)
    }   
    
    action.payload.then(function(response){
        const newAction = {...action,payload:response};
        dispatch(newAction);
    })
}



    
