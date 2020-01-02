import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setQuestions } from './actions';

import MainContainer from './container/MainContainer';

class App extends React.Component{
  //props.setQuestions(["Question1", "Question2"]);
  componentDidMount = () => {
    this.props.setQuestions([
      {
        question: "What is JS stand for?",
        answer: "JavaScript",
        options: ["JavaScript" , "JustScript", "JavaSystem", "JuniorScript" ]
    },
    {
        question: "What is first language?",
        answer: "JavaScript",
        options: ["JavaScript" , "JustScript", "JavaSystem", "JuniorScript" ]
    }
    ]);
  }
  
  render(){
    // console.log("Options: ", this.props.questions)
    return (
      <>
        <MainContainer/>
      </>
    );
  }
}
export default connect(null,{ setQuestions } )(App);
