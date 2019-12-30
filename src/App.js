import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setQuestions } from './actions';

class App extends React.Component{
  //props.setQuestions(["Question1", "Question2"]);
  componentDidMount = () => {
    this.props.setQuestions(["Question1", "Question2"]);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>JavaScript Quiz</h1>
          <h4>Question Size: {this.props.questions.length}</h4>
          <h4>Number of right answer: {this.props.numRight} </h4>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    numRight: state.numRight
  }
}

export default connect(mapStateToProps,{ setQuestions } )(App);
