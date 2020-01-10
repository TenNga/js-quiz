import React from 'react';
import { connect } from 'react-redux'

import {reset} from '../actions';
import './Result.css';

const Result = (props) => {
    return(
        <div className="result-container">
            <h1 id="result-title">Result of the Quize</h1>
            <h3 className="result">Number of Question: {props.questions.length}</h3>
            <h3 className="right">Right Answer: {props.numRight} </h3>
            <h3 className="wrong">Wrong Answer: {props.questions.length - props.numRight} </h3>
            <h2 id="reset-btn" onClick={props.reset}>TRY AGAIN</h2>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        numRight: state.numRight
    }
}
export default connect(mapStateToProps,{reset})(Result);