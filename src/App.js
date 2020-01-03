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
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: ["<script>" , "<javascript>", "<scripting>", "<js>" ]
    },
    {
        question: `What is the correct JavaScript syntax to change the content of the HTML element here => <p id="geek">GeeksforGeeks</p> `,
        answer: "JavaScript",
        options: [
          "document.getElement(“geek”).innerHTML=”I am a Geek”;" ,
          "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
          "document.getId(“geek”)=”I am a Geek”;", 
          "document.getElementById(“geek”).innerHTML=I am a Geek;" ]
    },
    {
      question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
      answer: "alert(“GeeksforGeeks”);",
      options: [
        "alertbox(“GeeksforGeeks”);" , 
        "msg(“GeeksforGeeks”);", 
        "msgbox(“GeeksforGeeks”);", 
        "alert(“GeeksforGeeks”);" ]
  },
  {
    question: "What is the correct syntax for referring to an external script called “geek.js”?",
    answer: "<script src=”geek.js”>",
    options: [
      "<script src=”geek.js”>" , 
    "<script href=”geek.js”>", 
    "<script ref=”geek.js”>", 
    "<script name=”geek.js”>" ]
},
{
  question: "The external JavaScript file must contain <script> tag. True or False?",
  answer: "False",
  options: ["True" , "False", "None", "Both" ]
},
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
