const initialState = {
    userData: {}
}

export const userReducer = (state = initialState, action) =>{
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'SET_DATA':
            return{
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}