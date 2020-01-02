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
            return { ...prevState, numRight: prevState.numRight++}
        default:
            return prevState
    }
}

export default reducer;