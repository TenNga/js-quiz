export const setQuestions = (questions) => {
    return { type: "SET_QUESTIONS", payload: questions}
}

export const UpdateNumberRight = () => {
    return { type: "UPDATE_NUMBER_RIGHT"}
}

export const setCurrentQuestion = () => {
    return { type: "SET_CURRENT_QUESTION"}
}

export const reset = () => {
    return { type: "RESET"}
}
