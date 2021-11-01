const Reducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN": {
            if (action.payload.name && action.payload.email) {
                return { ...state, user: action.payload }
            }
            else {
                console.log("error occured while displaying data");
                return state;
            }
        }
        case "USER_LOGOUT": {
            return { ...state, user: {} };
        }
        case "TOOGLE_THEME": {
            return { ...state, Darktheme: !state.Darktheme }
        }
        default: {
            return state;
        }
    }
}

export default Reducer;