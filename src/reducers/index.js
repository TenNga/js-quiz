const defaultState = {
    currentQuestion: 0,
    questions: [],
    numRight: 0
}

const reducer = (prevState = defaultState, action) => {
    switch(action.type){
        case "SET_QUESTIONS":
            return { ...prevState, questions: action.payload}
        case "UPDATE_NUMBER_RIGHT":
            return { ...prevState, numRight: prevState.numRight+1}
        case "SET_CURRENT_QUESTION":
            return { ...prevState, currentQuestion: prevState.currentQuestion+1}
        case "RESET":
            return {...prevState,
                currentQuestion: 0,
                numRight: 0
            }
        default:
            return prevState
    }
}

export default reducer;