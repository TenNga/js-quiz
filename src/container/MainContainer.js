import React from 'react';
import { connect } from 'react-redux';
import {setCurrentQuestion, UpdateNumberRight} from '../actions';

import "./MainContainer.css";

const MainContainer = (props) => {

    const renderOptions = () => {
        return  props.questions[props.currentQuestion].options.map(opt => <li className="optList" onClick={() => optionClicked(opt)}>{opt}</li>)
      }

    const optionClicked = (opt) => {
        if(props.questions[props.currentQuestion].answer === opt){
            props.UpdateNumberRight();
            console.log("Right Answer: ", props.numRight)
            console.log("Right answer");
        }
        else
            console.log("WRONG WRONG");
        props.setCurrentQuestion();

        console.log("Current Question: ", props.currentQuestion)
        
        
    }

    return(
        <div className="main-container">
          <h1>JavaScript Quiz</h1>
          <h4 className="question-num">
            QUESTION NO. {props.currentQuestion+1} 
          </h4>
          <h4 className="question">
            {props.questions[props.currentQuestion]? props.questions[props.currentQuestion].question : 0 }
            </h4>
          <h4>OPTIONS</h4>
          <ul>
            { props.questions.length > 0? renderOptions() : ""}
          </ul>
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

export default connect(mapStateToProps, {setCurrentQuestion,UpdateNumberRight})(MainContainer);