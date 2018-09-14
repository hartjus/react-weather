const defaultState = {
    zipCode: '',
    forecast: []
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_ZIP':
            return {
                ...state,
                zipCode: action.payload
            }
        case 'UPDATE_FORECAST':
            return {
                ...state,
                forecast: action.payload
            }

        default: return state
    }
};

export default reducer;
