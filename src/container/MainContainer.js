import React from 'react';
import { connect } from 'react-redux';

const MainContainer = (props) => {
    const renderOptions = () => {
        console.log("Options: ")
        return  props.questions[props.currentQuestion].options.map(opt => <li>{opt}</li>)
      }

    return(
        <div className="App">
        <header className="App-header">
          <h1>JavaScript Quiz</h1>
          <h4>Questions: {props.questions[0]? props.questions[0].question : 0 }</h4>
          <h4>Options:</h4>
          <ul>
            { props.questions.length > 0? renderOptions() : ""}
          </ul>
        </header>
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
        currentQuestion: state.currentQuestion,
        questions: state.questions,
        numRight: state.numRight
    }
  }

export default connect(mapStateToProps)(MainContainer);